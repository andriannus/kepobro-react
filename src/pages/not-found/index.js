import React from 'react';

import { Container } from 'pages/not-found/not-found';

const NotFound = () => {
  const head = {
    title: 'Page Not Found - KepoBro News',
    meta: [
      {
        name: 'description',
        content: 'Halaman tidak ditemukan. Silahkan kembali ke halaman awal.'
      },
      {
        name: 'title',
        content: 'Page Not Found - KepoBro News'
      },
      {
        name: 'og:description',
        content: 'Halaman tidak ditemukan. Silahkan kembali ke halaman awal.'
      },
      {
        name: 'og:title',
        content: 'Page Not Found - KepoBro News'
      },
      {
        name: 'og:url',
        content: 'https://news.andriannus.id'
      },
      {
        name: 'twitter:description',
        content: 'Halaman tidak ditemukan. Silahkan kembali ke halaman awal.'
      },
      {
        name: 'twiter:title',
        content: 'Page Not Found - KepoBro News'
      }
    ]
  };

  return (
    <Container head={head} />
  );
}

export default NotFound;
