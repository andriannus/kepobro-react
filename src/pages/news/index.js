import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewsContext from 'pages/news/modules/services/news.context';
import { Container } from 'pages/news/news-content';
import { API } from 'shared/constants/api.constant';
import { capitalize } from 'shared/utils/string.util';

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading ] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(capitalize(category));
    setArticles([]);
    setIsLoading(true);
  
    axios.get(`${API.URL}?${getQueryParams(category)}`)
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch(() => {
        setArticles([]);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [category])

  return (
    <NewsContext.Provider
      value={{ articles, isLoading, title }}
    >
      <Container />
    </NewsContext.Provider>
  )
}

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

export default News;
