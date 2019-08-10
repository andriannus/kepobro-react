import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import NewsContent from 'shared/components/news-content/index';

const Container = ({ category }) => {
  return (
    <Fragment>
      <Header />

      <NewsContent category={category} />
    </Fragment>
  )
}

const Header = () => {
  return (
    <Helmet>
      <title>Home - KepoBro News</title>
    </Helmet>
  )
}

export default Container;
