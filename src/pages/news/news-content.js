import React, { useContext } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import LoaderNews from 'shared/components/loader-news';
import NoConnection from 'shared/components/no-connection';
import SEO from 'shared/components/seo';

import NewsContext from 'pages/news/modules/services/news.context';
import { IMAGE } from 'shared/constants/news.constant';

import 'pages/news/news-content.scss';

export const Container = () => {
  const { articles, category } = useContext(NewsContext);

  if (!articles) return <NoConnection />;

  return (
    <HelmetProvider>
      <SEO category={category} />

      <div className="card">
        <CardHeader />
        <CardContent />
        <CardFooter />
      </div>
    </HelmetProvider>
  )
}

const CardHeader = () => {
  const { isLoading, title } = useContext(NewsContext);

  return (
    <header className="card-header">
      <span className="card-header-title">
        { title }
      </span>

      { isLoading ? null : <RefreshButton /> }
    </header>
  )
}

const CardContent = () => {
  const { isLoading } = useContext(NewsContext);

  return (
    <div className="card-content">
      { (isLoading ? <LoaderNews /> : <Article />) }
    </div>
  )
}

const CardFooter = () => {
  const { isLoading } = useContext(NewsContext);

  if (isLoading) return null;

  return (
    <footer className="card-footer">
      <div className="card-footer-item">
        <span>
          <em>All displayed</em>
        </span>
      </div>
    </footer>
  )
}

const RefreshButton = () => {
  return (
    <span
      className="card-header-icon"
      title="Refresh News"
      onClick={() => window.location.reload()}
    >
      <span className="icon">
        <i className="fas fa-sync-alt"></i>
      </span>
    </span>
  )
}

const ArticleImage = ({ imageTitle, urlToImage }) => {
  if (!urlToImage) {
    return <img src={IMAGE.error} alt={imageTitle} />
  }

  return (
    <img
      src={urlToImage}
      alt={imageTitle}
      onError={(e) => e.target.src=`${IMAGE.error}`}
    />
  )
}

const Article = () => {
  const { articles, onReadArticle } = useContext(NewsContext);

  return (
    <>
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
                <div className="content">
                  <p
                    className="has-text-justified mb-10 is-link"
                    onClick={() => onReadArticle(article)}
                  >
                    <strong>{ article.title }</strong>
                  </p>

                  <span>
                    <i className="fas fa-globe mr-5"></i>
                    { article.source.name }
                  </span>
                </div>
              </div>
            </article>
          )
        })
      }
    </>
  )
}
