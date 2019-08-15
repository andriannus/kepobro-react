import React from 'react';
import Loadable from 'react-loadable';

import MainRoutes from 'pages/main.routes';
import { loadSharedComponent } from 'shared/utils/operation.util';

const LoadableNavbar = Loadable({
  loader: () => loadSharedComponent('navbar'),
  loading: () => null
})

const LoadableSidebarLeft = Loadable({
  loader: () => loadSharedComponent('sidebar-left'),
  loading: () => null
})

const LoadableSidebarRight = Loadable({
  loader: () => loadSharedComponent('sidebar-right'),
  loading: () => null
})

const Main = () => {
  return (
    <section className="section">
      <LoadableNavbar />

      <div className="container">
        <div className="columns">
          <LoadableSidebarLeft />

          <div className="column is-half">
            <MainRoutes />
          </div>

          <LoadableSidebarRight />
        </div>
      </div>
    </section>
  );
}

export default Main;
