import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.jpg';

export const Container = () => {
  return (
    <nav
      aria-label="main navigation"
      className="navbar is-fixed-top is-dark"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={logo}
              alt="KepoBro News"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
