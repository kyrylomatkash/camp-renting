import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;

  text-decoration: none;
  font-weight: 500;

  .MuiButton-root {
    background-color: var(--button-color);
    color: #fff;
    border-radius: 20px;
    padding: 10px 20px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d84343;
    }

    svg {
      margin-right: 5px;
    }
  }
`;
