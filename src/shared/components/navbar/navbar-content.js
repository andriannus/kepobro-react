import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.jpg';
import { NAVBAR_MENUS } from 'shared/constants/news.constant';

import 'shared/components/navbar/navbar.scss';

export const Container = () => {
  return (
    <nav
      aria-label="main navigation"
      className="navbar is-fixed-top is-dark"
      role="navigation"
    >
      <div className="container">
        <NavbarBrand />

        <NavbarMenu />
      </div>
    </nav>
  )
}

const NavbarBrand = () => {
  return (
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img src={logo} alt="KepoBro News" />
      </Link>
    </div>
  )
}

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {
              NAVBAR_MENUS.map((menu, key) => {
                return (
                  <a
                    key={key}
                    href={menu.href}
                    className={`button ${menu.class}`}
                  >
                    <span className="icon">
                      <i className={menu.icon} />
                    </span>
                    <span>{menu.name}</span>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
