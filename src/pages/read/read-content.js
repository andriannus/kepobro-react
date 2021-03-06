import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import errorImage from 'assets/images/error-404.png';
import ReadContext from 'pages/read/modules/services/read.context';
import {
  IMAGE,
  TEXT_FOR_CONTENT_NOT_FOUND
} from 'shared/constants/news.constant';

export const Container = () => {
  const { isNotFound } = useContext(ReadContext);

  if (isNotFound) return <NotFound />;

  return (
    <div className="card bra-10">
      <CardHeader />
      <CardContent />
      <CardFooter />
    </div>
  )
}

const CardHeader = () => {
  const { history } = useContext(ReadContext);

  return (
    <header className="card-header">
      <span className="card-header-title">
        <span
          className="icon is-link is-small mr-10"
          onClick={history.goBack}
        >
          <i className="fas fa-arrow-left" />
        </span>

        <span>Read</span>
      </span>
    </header>
  )
}

const CardContent = () => {
  const {
    article,
    getFormattedArticle,
    getFormattedDate
  } = useContext(ReadContext);

  return (
    <div className="card-content has-text-justified">
      <figure className="image mb-10">
        <img
          src={article.urlToImage ? article.urlToImage : IMAGE.error}
          alt={article.title}
          onError={(e) => e.target.src = `${IMAGE.error}`}
        />
      </figure>

      <h1 className="title is-size-5 mb-10">
        { article.title }
      </h1>

      <div className="level">
        <div className="level-left">
          <span className="is-size-7">
            { article.author || TEXT_FOR_CONTENT_NOT_FOUND.author }
          </span>
        </div>

        <div className="level-right">
          <span className="is-size-7">
            { getFormattedDate(article.publishedAt) }
          </span>
        </div>
      </div>

      <p className="is-size-6">
        { getFormattedArticle(article.content) }
      </p>
    </div>
  )
}

const CardFooter = () => {
  const { article } = useContext(ReadContext);

  return (
    <footer className="card-footer">
      <a
        href={article.url}
        className="card-footer-item"
        rel="noreferrer"
        target="blank"
      >
        <span>
          { article.content ? 'Continue Reading' : 'Go to Website' }
        </span>

        <span className="icon">
          <i className="fas fa-external-link-square-alt" />
        </span>
      </a>
    </footer>
  )
}

const NotFound = () => {
  return (
    <div className="has-text-centered">
      <div className="mb-10">
        <img
          src={errorImage}
          alt="Not Found - Freepik"
          width="40%"
        />
      </div>

      <p className="is-size-5 mb-10">
        <em>No article selected</em>
      </p>

      <Link className="button is-dark" to="/">
        Back to Home
      </Link>
    </div>
  )
}
