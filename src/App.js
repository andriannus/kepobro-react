import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from 'shared/components/navbar';
import SidebarLeft from 'shared/components/sidebar-left';
import SidebarRight from 'shared/components/sidebar-right';

function App() {
  return (
    <BrowserRouter>
      <section className="section">
        <Navbar />

        <div className="container">
          <div className="columns">
            <div className="column">
              <SidebarLeft />
            </div>

            <div className="column is-half">
              <p>
                -- HOME --
              </p>
            </div>

            <div className="column">
              <SidebarRight />
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
