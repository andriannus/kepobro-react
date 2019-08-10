import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from 'shared/components/news-content/news-content';
import { API } from 'shared/constants/api.constant';
import { capitalize } from 'shared/utils/string.util';

const NewsContent = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading ] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(capitalize(category));
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
    <Container
      articles={articles}
      isLoading={isLoading}
      title={title}
    />
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

export default NewsContent;
