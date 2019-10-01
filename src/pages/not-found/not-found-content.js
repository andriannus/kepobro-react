import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import errorImage from 'assets/images/error-404.png';

export const Container = ({ head }) => {
  return (
    <Fragment>
      <Head head={head} />

      <div className="has-text-centered">
        <div className="mb-10">
          <img
            src={errorImage}
            alt="Error 404 - Smashicons"
            width="40%"
          />
        </div>

        <Link
          className="button is-dark"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </Fragment>
  )
}

const Head = ({ head }) => {
  return (
    <Helmet>
      <title>{ head.title }</title>

      {
        head.meta.map((m, key) => {
          return (
            <meta key={key} name={m.name} content={m.content} />
          )
        })
      }
    </Helmet>
  )
}
