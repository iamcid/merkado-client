import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>

      <NavLink to="/" style={ link } className="navbar-link">
        Home
      </NavLink>

      <NavLink to="/products" style={ link } className="navbar-link">
        Product
      </NavLink>

      <NavLink to="/products/new" style={ link } className="navbar-link">
        Add a Product
      </NavLink>
    </div>
  )
}

const link = {
    width: '100px',
    padding: '20px',
    margin: '0 8px 8px',
    textDecoration: 'none',
    color: 'black',
  }

export default NavBar;