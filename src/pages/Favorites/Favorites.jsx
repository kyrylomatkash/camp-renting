import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/adverts/selectors';
import AdvertItem from '../../components/AdvertItem/AdvertItem';
import { EmptyFav } from './Favorites.styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Masonry from 'react-masonry-css';

const AnimatedBox = styled(Box)({
  animation: 'fadeIn 0.5s',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

const StyledEmptyFav = styled(EmptyFav)({
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <AnimatedBox>
      {favorites.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {favorites.map(el => (
            <div key={el._id}>
              {' '}
              <AdvertItem item={el} />
            </div>
          ))}
        </Masonry>
      ) : (
        <StyledEmptyFav>
          <Typography variant="h6" gutterBottom>
            Your favorites list is empty.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Let's add some favorite campers.
          </Typography>
          <Button variant="contained" color="primary" href="catalog">
            Explore Campers
          </Button>
        </StyledEmptyFav>
      )}
    </AnimatedBox>
  );
};

export default Favorites;
