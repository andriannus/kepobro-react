import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import idLocale from 'date-fns/locale/id';

import ReadContext from 'pages/read/modules/services/read.context';
import { Container } from 'pages/read/read-content';
import {
  ARTICLE_DATE_FORMAT,
  TEXT_FOR_CONTENT_NOT_FOUND
} from 'shared/constants/news.constant';

import 'pages/read/read.scss';

const Read = ({ history }) => {
  const [article, setArticle] = useState({});
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('article') || ''

    if (!!data) {
      setIsNotFound(false);
      setArticle(JSON.parse(data));
    } else {
      setIsNotFound(true);
    }
  }, []);

  const getFormattedArticle = (text) => {
    if (!text) return TEXT_FOR_CONTENT_NOT_FOUND.content;

    const tempArr = text.split('');
    const startSub = tempArr.indexOf('[');
    const finishSub = tempArr.indexOf(']');
    const substractSub = parseInt(finishSub) - parseInt(startSub) + 1;
    const findString = text.substr(startSub, substractSub);

    return text.replace(findString, '');
  }

  const getFormattedDate = (date) => {
    if (!date) return TEXT_FOR_CONTENT_NOT_FOUND.date;

    return format(date, ARTICLE_DATE_FORMAT, { locale: idLocale });
  }

  return (
    <ReadContext.Provider
      value={{
        article,
        getFormattedArticle,
        getFormattedDate,
        history,
        isNotFound,
      }}
    >
      <Container />
    </ReadContext.Provider>
  );
}

export default Read;
