import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Carteira Virtual</h1>
    <NavLink exact to="/" activeClassName="orange">
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="orange">
      Criar
    </NavLink>
    <NavLink to="/help" activeClassName="orange">
      Ajuda
    </NavLink>
  </header>
);

export default Header;
