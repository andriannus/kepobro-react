import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchArticles = (url) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios.get(url)
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch(() => {
        setArticles([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url])

  return [articles, isLoading];
}

export default useFetchArticles;
