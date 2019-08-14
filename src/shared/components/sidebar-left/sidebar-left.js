import React from 'react';
import { NavLink } from 'react-router-dom';

import { CATEGORIES } from 'shared/constants/news.constant';

export const Container = () => {
  return (
    <div className="column">
      <div className="card is-hidden-mobile sidebar">
        <CardHeader />

        <CardContent />
      </div>
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
