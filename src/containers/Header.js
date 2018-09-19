import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink className="header__title" exact to="/dashboard">
          <h1>Controlador de Gastos</h1>
        </NavLink>
        {/*
    <NavLink to="/create" activeClassName="orange">
      Criar
    </NavLink>
    <NavLink to="/help" activeClassName="orange">
      Ajuda
    </NavLink>
    */}
        <button onClick={startLogout}>Sair</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
