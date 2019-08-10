import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/home';
import Technology from 'pages/technology';

const LoadableNavbar = Loadable({
  loader: () => import('shared/components/navbar'),
  loading() {
    return <div>Loading...</div>
  }
})

const LoadableSidebarLeft = Loadable({
  loader: () => import('shared/components/sidebar-left'),
  loading() {
    return <div>Loading...</div>
  }
})

const LoadableSidebarRight = Loadable({
  loader: () => import('shared/components/sidebar-right'),
  loading() {
    return <div>Loading...</div>
  }
})

const App = () => {
  return (
    <BrowserRouter>
      <section className="section">
        <LoadableNavbar />

        <div className="container">
          <div className="columns">
            <div className="column">
              <LoadableSidebarLeft />
            </div>

            <div className="column is-half">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/technology" component={Technology} />
              </Switch>
            </div>

            <div className="column">
              <LoadableSidebarRight />
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
