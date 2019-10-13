import React from 'react';
import loadable from '@loadable/component';

import MainRoutes from 'pages/main.routes';
import { loadSharedComponent } from 'shared/utils/operation.util';

const LoadableNavbar = loadable(() => {
  return loadSharedComponent('navbar');
});

const LoadableSidebarLeft = loadable(() => {
  return loadSharedComponent('sidebar-left');
});

const LoadableSidebarRight = loadable(() => {
  return loadSharedComponent('sidebar-right');
});

const LoadableButtonToTop = loadable(() => {
  return loadSharedComponent('button-to-top');
});

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

      <LoadableButtonToTop />
    </section>
  );
}

export default Main;
