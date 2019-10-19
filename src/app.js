import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from 'pages/main';
import ScrollToTop from 'shared/components/scroll-to-top';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Main />
    </BrowserRouter>
  )
}

const root = document.getElementById('root');

export default render(<App />, root);
