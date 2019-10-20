import React from 'react';

import noConnectImage from 'assets/images/no-connection.png';

export const Container = () => {
  return (
    <div className="has-text-centered">
      <div className="mb-10">
        <img
          src={noConnectImage}
          alt="No Connection - Those Icons"
          width="40%"
        />

        <p>
          It looks like you don't have an internet connection
        </p>
      </div>

      <button
        className="button is-dark"
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </button>
    </div>
  )
}
