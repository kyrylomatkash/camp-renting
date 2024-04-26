import React, { useState } from 'react';
import './Game.css';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [playerXWins, setPlayerXWins] = useState(0);
  const [playerOWins, setPlayerOWins] = useState(0);
  const [playerXSymbol, setPlayerXSymbol] = useState('X');
  const [playerOSymbol, setPlayerOSymbol] = useState('O');

  const handleClick = index => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? playerXSymbol : playerOSymbol;
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    calculateWinner(newBoard);
  };

  const calculateWinner = currentBoard => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        setWinningLine(lines[i]);
        updateWins(currentBoard[a]);
        return;
      }
    }

    if (!currentBoard.includes(null)) {
      setWinner('Draw');
    }
  };

  const updateWins = winner => {
    if (winner === playerXSymbol) {
      setPlayerXWins(prevWins => prevWins + 1);
    } else if (winner === playerOSymbol) {
      setPlayerOWins(prevWins => prevWins + 1);
    }
  };

  const renderSquare = index => {
    const isWinningSquare = winningLine.includes(index);
    return (
      <button
        className={`square ${isWinningSquare ? 'winning' : ''}`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setWinningLine([]);
  };

  const handlePlayerXSymbolChange = event => {
    setPlayerXSymbol(event.target.value);
  };

  const handlePlayerOSymbolChange = event => {
    setPlayerOSymbol(event.target.value);
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((square, index) => (
          <div key={index} className="square-container">
            {renderSquare(index)}
          </div>
        ))}
      </div>
      <div className="status">
        {winner ? (
          winner === 'Draw' ? (
            <p>It's a Draw!</p>
          ) : (
            <p>{winner} Wins!</p>
          )
        ) : (
          <p>Next Player: {xIsNext ? playerXSymbol : playerOSymbol}</p>
        )}
        <p>Player X Wins: {playerXWins}</p>
        <p>Player O Wins: {playerOWins}</p>
        <div className="symbol-selection">
          <label htmlFor="playerXSymbol">Player X Symbol:</label>
          <input
            type="text"
            id="playerXSymbol"
            value={playerXSymbol}
            onChange={handlePlayerXSymbolChange}
          />
          <label htmlFor="playerOSymbol">Player O Symbol:</label>
          <input
            type="text"
            id="playerOSymbol"
            value={playerOSymbol}
            onChange={handlePlayerOSymbolChange}
          />
        </div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default Game;
