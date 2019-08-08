import React from 'react';
import { Link } from 'react-router-dom';

import { CATEGORIES } from 'assets/consts/categories';

export const Container = () => {
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
              return(
                <li key={key}>
                  <Link to={category}>
                    <span className="is-capitalized">
                      {category}
                    </span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </aside>
    </div>
  )
}
