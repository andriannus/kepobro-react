import React from 'react';

import NewsContext from 'pages/news/modules/services/news.context';
import useFetchArticles from 'pages/news/modules/services/news.hook';
import { Container } from 'pages/news/news-content';
import { API } from 'shared/constants/api.constant';
import { capitalize } from 'shared/utils/string.util';

const News = ({ category, history }) => {
  const getQueryParams = (category) => {
    const queryArray = [
      `apiKey=${API.KEY}`,
      `country=${API.COUNTRY}`
    ];
  
    if (category !== 'trending') {
      queryArray.push(`category=${category}`);
    }
  
    return queryArray.join('&');
  }

  const readArticle = (article) => {
    localStorage.setItem('article', JSON.stringify(article));

    history.push('/read');
  }

  const title = capitalize(category);
  const url = `${API.URL}?${getQueryParams(category)}`;

  const [articles, isLoading] = useFetchArticles(url);

  return (
    <NewsContext.Provider
      value={{
        articles,
        category,
        isLoading,
        title,
        onReadArticle: readArticle,
      }}
    >
      <Container />
    </NewsContext.Provider>
  );
}

export default News;
