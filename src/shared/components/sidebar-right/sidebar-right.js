import React from 'react';

import profileImage from 'assets/images/photo.jpg';

export const Container = () => {
  return (
    <div className="column">
      <div className="sidebar">
        <div className="card mb-10">
          <CardHeader />

          <CardContent />

          <CardFooter />
        </div>

        <Credits />
      </div>
    </div>
  )
}

const CardHeader = () => {
  return (
    <header className="card-header">
      <span className="card-header-title">
        About Developer
      </span>
    </header>
  )
}

const CardContent = () => {
  return (
    <div className="card-content">
      <div className="content has-text-centered">
        <img
          src={profileImage}
          alt="Andriannus Parasian"
          className="brb-50-per mb-10"
          width="50%"
        />

        <p>
          <strong>Andriannus Parasian</strong>
        </p>

        <p>
          Front-end Engineer at Tunaiku
        </p>
      </div>
    </div>
  )
}

const CardFooter = () => {
  return (
    <footer className="card-footer">
      <a
        href="https://andriannus.id"
        className="card-footer-item"
      >
        Web
      </a>

      <a
        href="https://github.com/andriannus"
        className="card-footer-item"
      >
        Github
      </a>
    </footer>
  )
}

const Credits = () => {
  return (
    <p className="has-text-grey has-text-justified is-size-7">
      Powered by <a href="https://newsapi.org">News API</a> ·
      Developed with <a href="https://reactjs.org/">React.js</a>,&nbsp;
      <a href="https://bulma.io/">Bulma</a>,
      and <a href="https://www.netlify.com/">Netlify</a>
    </p>
  )
}
