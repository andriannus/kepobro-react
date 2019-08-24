import React from 'react';
import { NavLink } from 'react-router-dom';

import { CATEGORIES } from 'shared/constants/news.constant';
import 'shared/components/sidebar-left/sidebar-left.scss';

export const Container = () => {
  return (
    <div className="column">
      <Mobile />

      <Desktop />
    </div>
  )
}

const Mobile = () => {
  return (
    <div className="bra-3 has-background-white">
      <div
        className="tabs is-toggle is-hidden-tablet"
      >
        <ul>
          {
            CATEGORIES.map((category, key) => {
              if (category === 'trending') return null;

              return(
                <li key={key}>
                  <NavLink
                    activeClassName="is-active"
                    to={`/${category}`}
                  >
                    <span className="is-capitalized">
                      {category}
                    </span>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

const Desktop = () => {
  return (
    <div className="card is-hidden-mobile sidebar">
      <CardHeader />

      <CardContent />
    </div>
  )
}

const CardHeader = () => {
  return (
    <header className="card-header">
      <span className="card-header-title">
        Categories
      </span>
    </header>
  )
}

const CardContent = () => {
  return (
    <div className="card-content">
      <aside className="menu">
        <ul className="menu-list">
          {
            CATEGORIES.map((category, key) => {
              if (category === 'trending') return null;

              return(
                <li key={key}>
                  <NavLink
                    activeClassName="is-active"
                    to={`/${category}`}
                  >
                    <span className="is-capitalized">
                      {category}
                    </span>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </aside>
    </div>
  )
}
