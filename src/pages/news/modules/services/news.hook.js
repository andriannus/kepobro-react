import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchArticles = (url) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    (async () => {
      try {
        const result = await axios.get(url, { cancelToken: source.token });

        setArticles(result.data.articles);
        setIsLoading(false);
      } catch(error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled');
        }
      }
    })();

    return () => source.cancel();
  }, [url]);

  return [articles, isLoading];
}

export default useFetchArticles;
