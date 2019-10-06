import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, withRouter } from 'react-router-dom';

import { CATEGORIES } from 'shared/constants/news.constant';

const LoadableNews = Loadable({
  loader: () => import('pages/news'),
  loading: () => null,
});

const LoadableNotFound = Loadable({
  loader: () => import('pages/not-found'),
  loading: () => null
});

const LoadableReadNews = Loadable({
  loader: () => import('pages/read'),
  loading: () => null
})

const MainRoutes = () => {
  return (
    <Switch>
      {
        CATEGORIES.map((category, key) => {
          return (
            <Route
              exact
              key={key}
              path={`/${category === 'trending' ? '' : category}`}
              render={
                (props) => <LoadableNews category={category} {...props} />
              }
            />
          )
        })
      }
      
      <Route exact path="/read" component={LoadableReadNews} />
      <Route exact component={LoadableNotFound} />
    </Switch>
  )
}

export default withRouter(MainRoutes);
