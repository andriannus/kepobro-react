import React, { Fragment } from 'react';

export const Container = ({articles, title, isLoading}) => {
  return (
    <div className="card">
      <CardHeader isLoading={isLoading} title={title} />

      <CardContent articles={articles} isLoading={isLoading} />

      <CardFooter isLoading={isLoading} />
    </div>
  )
}

const CardHeader = ({isLoading, title}) => {
  return (
    <header className="card-header">
      <span className="card-header-title">
        {title}
      </span>

      <RefreshButton isLoading={isLoading} />
    </header>
  )
}

const CardContent = ({articles, isLoading}) => {
  return (
    <div className="card-content">
      <ProgressBar isLoading={isLoading} />

      <Article articles={articles} />
    </div>
  )
}

const CardFooter = ({isLoading}) => {
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

const RefreshButton = ({isLoading}) => {
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

const ArticleImage = ({title, urlToImage}) => {
  if (!urlToImage) {
    return (
      <img
        src="https://bulma.io/images/placeholders/480x320.png"
        alt={title}
      />
    )
  }

  return (
    <img
      src={urlToImage}
      alt={title}
      onError={(e) => e.target.src='https://bulma.io/images/placeholders/480x320.png'}
    />
  )
}

const Article = ({articles, isLoading}) => {
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
                    title={article.title}
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

const ProgressBar = ({isLoading}) => {
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
