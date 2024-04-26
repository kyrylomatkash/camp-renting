import React from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import { HeaderStyled, NavList, NavItem, LinkStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <h1 style={{ textAlign: 'center', margin: 0 }}>Camper Rentals</h1>
      <NavList>
        <NavItem>
          <LinkStyled to="/">
            <Button
              startIcon={<HomeIcon />}
              variant="contained"
              color="primary"
            >
              Home
            </Button>
          </LinkStyled>
        </NavItem>
        <NavItem>
          <LinkStyled to="/catalog">
            <Button
              startIcon={<BookIcon />}
              variant="contained"
              color="primary"
            >
              Catalog
            </Button>
          </LinkStyled>
        </NavItem>
        <NavItem>
          <LinkStyled to="/favorites">
            <Button
              startIcon={<FavoriteBorderIcon />}
              variant="contained"
              color="primary"
            >
              Favorites
            </Button>
          </LinkStyled>
        </NavItem>
      </NavList>
    </HeaderStyled>
  );
};

export default Header;
