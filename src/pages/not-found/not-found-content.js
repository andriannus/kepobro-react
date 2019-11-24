import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import errorImage from 'assets/images/error-404.png';
import SEO from 'shared/components/seo';

export const Container = () => {
  return (
    <HelmetProvider>
      <SEO category='notFound' />

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
    </HelmetProvider>
  )
}
