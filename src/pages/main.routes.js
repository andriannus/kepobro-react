import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

import { CATEGORIES } from 'shared/constants/news.constant';

const LoadableNews = loadable(() => {
  return import('pages/news');
})

const LoadableNotFound = loadable(() => {
  return import('pages/not-found');
})

const LoadableReadNews = loadable(() => {
  return import('pages/read');
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
