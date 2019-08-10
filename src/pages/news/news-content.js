import React, { Fragment, useContext } from 'react';

import UserContext from 'pages/news/modules/services/news.context';

export const Container = () => {
  return (
    <div className="column is-half">
      <div className="card">
        <CardHeader />

        <CardContent />

        <CardFooter />
      </div>
    </div>
  )
}

const CardHeader = () => {
  const { isLoading, title } = useContext(UserContext);

  return (
    <header className="card-header">
      <span className="card-header-title">
        {title}
      </span>

      <RefreshButton isLoading={isLoading} />
    </header>
  )
}

const CardContent = () => {
  const { articles, isLoading } = useContext(UserContext);

  return (
    <div className="card-content">
      <ProgressBar isLoading={isLoading} />

      <Article articles={articles} />
    </div>
  )
}

const CardFooter = () => {
  const { isLoading } = useContext(UserContext);

  if (isLoading) return null;

  return (
    <footer
      className="card-footer"
    >
      <div className="card-footer-item">
        <span>
          <em>All displayed</em>
        </span>
      </div>
    </footer>
  )
}

const RefreshButton = () => {
  const { isLoading } = useContext(UserContext);

  if (isLoading) return null;

  return (
    <span
      className="card-header-icon"
      title="Refresh News"
      onClick={() => console.log('getNews()')}
    >
      <span className="icon">
        <i className="fas fa-sync-alt"></i>
      </span>
    </span>
  )
}

const ArticleImage = ({imageTitle, urlToImage}) => {
  if (!urlToImage) {
    return (
      <img
        src="https://bulma.io/images/placeholders/480x320.png"
        alt={imageTitle}
      />
    )
  }

  return (
    <img
      src={urlToImage}
      alt={imageTitle}
      onError={(e) => e.target.src='https://bulma.io/images/placeholders/480x320.png'}
    />
  )
}

const Article = () => {
  const { articles, isLoading } = useContext(UserContext);

  if (isLoading) return null;

  return (
    <Fragment>
      {
        articles.map((article, key) => {
          return (
            <article key={key} className="media">
              <figure className="media-left mt-5">
                <p className="image is-64x64">
                  <ArticleImage
                    imageTitle={article.title}
                    urlToImage={article.urlToImage}
                  />
                </p>
              </figure>

              <div className="media-content">
                <div
                  className="content"
                >
                  <p
                    className="has-text-justified mb-10"
                    onClick={() => console.log('readArticle(article)')}
                  >
                    <strong>{article.title}</strong>
                  </p>

                  <span>
                    <i className="fas fa-globe mr-5"></i>
                    {article.source.name}
                  </span>
                </div>
              </div>
            </article>
          )
        })
      }
    </Fragment>
  )
}

const ProgressBar = () => {
  const { isLoading } = useContext(UserContext);

  if (!isLoading) return null;

  return (
    <progress
      className="progress is-small is-dark"
      max="100"
    >
      15%
    </progress>
  )
}
