import React from 'react';

import NewsContext from 'pages/news/modules/services/news.context';
import useFetchArticles from 'pages/news/modules/services/news.hook';
import { Container } from 'pages/news/news-content';
import { API } from 'shared/constants/api.constant';
import { capitalize } from 'shared/utils/string.util';

const News = ({ category, history }) => {
  const title = capitalize(category);
  const url = `${API.URL}?${getQueryParams(category)}`;

  const [articles, isLoading] = useFetchArticles(url);

  const head = {
    title: getTitle(category),
    meta: [
      {
        name: 'description',
        content: getDescription(category),
      },
      {
        name: 'title',
        content: getTitle(category),
      },
      {
        name: 'og:description',
        content: getDescription(category),
      },
      {
        name: 'og:title',
        content: getTitle(category),
      },
      {
        name: 'og:url',
        content: 
          `https://news.andriannus.id/${category === 'trending' ? '' : category}`
      },
      {
        name: 'twitter:description',
        content: getDescription(category),
      },
      {
        name: 'twiter:title',
        content: getTitle(category),
      }
    ]
  }

  function getQueryParams(category) {
    const queryArray = [
      `apiKey=${API.KEY}`,
      `country=${API.COUNTRY}`
    ];
  
    if (category !== 'trending') {
      queryArray.push(`category=${category}`);
    }
  
    return queryArray.join('&');
  }

  function getTitle(category) {
    if (category === 'trending') {
      return 'KepoBro News - Kepoin tentang yang hits saat ini!';
    }

    return `${capitalize(category)} - KepoBro News`
  }

  function getDescription(category) {
    if (category === 'trending') {
      return 'Berita lengkap dan terupdate dari News API';
    }

    return `Berita lengkap dan terupdate mengenai ${category} dari News API`;
  }

  function readArticle(article) {
    localStorage.setItem('article', JSON.stringify(article));

    history.push('/read');
  }

  return (
    <NewsContext.Provider
      value={{
        articles,
        head,
        isLoading,
        onReadArticle: readArticle,
        title
      }}
    >
      <Container />
    </NewsContext.Provider>
  )
}

export default News;
