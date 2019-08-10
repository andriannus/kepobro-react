import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, withRouter } from 'react-router-dom';

import { CATEGORIES } from 'shared/constants/news.constant';

const LoadableNews = Loadable({
  loader: () => import('pages/news'),
  loading: () => null,
});

const MainRoutes = () => {
  return (
    <Switch>
      {
        CATEGORIES.map((category, key) => {
          return (
            <Route
              exact
              key={key}
              path={`/${category !== 'trending' ? category : ''}`}
              render={
                (props) => <LoadableNews category={category} {...props} />
              }
            />
          )
        })
      }
    </Switch>
  )
}

export default withRouter(MainRoutes);
