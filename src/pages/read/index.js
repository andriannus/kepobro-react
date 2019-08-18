import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import idLocale from 'date-fns/locale/id';

import ReadContext from 'pages/read/modules/services/read.context';
import { Container } from 'pages/read/read';

import 'pages/read/read.scss';

const Read = ({ history }) => {
  const [article, setArticle] = useState({});
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('article') || ''

    if (!!data === true) {
      setIsNotFound(false);
      setArticle(JSON.parse(data));
    } else {
      setIsNotFound(true);
    }
  }, []);

  function articleFormat(text) {
    if (!text) return ''

    const tempArr = text.split('')
    const startSub = tempArr.indexOf('[')
    const finishSub = tempArr.indexOf(']')
    const substractSub = parseInt(finishSub) - parseInt(startSub) + 1
    const findString = text.substr(startSub, substractSub)

    return text.replace(findString, '')
  }

  function dateFormat(date) {
    if (!date) return ''

    return format(date, 'dddd, DD MMMM YYYY · HH:mm', { locale: idLocale })
  }

  return (
    <ReadContext.Provider
      value={
        { article, articleFormat, dateFormat, history, isNotFound }
      }
    >
      <Container />
    </ReadContext.Provider>
  )
}

export default Read;
