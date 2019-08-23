import React from 'react';

import { Container } from 'pages/not-found/not-found';

const NotFound = () => {
  const head = {
    title: 'Page Not Found - KepoBro News',
    meta: [
      {
        property: 'description',
        content: 'Halaman tidak ditemukan. Silahkan kembali ke halaman awal.'
      },
      {
        property: 'title',
        content: 'Page Not Found - KepoBro News'
      },
      {
        property: 'og:description',
        content: 'Halaman tidak ditemukan. Silahkan kembali ke halaman awal.'
      },
      {
        property: 'og:title',
        content: 'Page Not Found - KepoBro News'
      },
      {
        property: 'og:url',
        content: 'https://news.andriannus.id'
      },
      {
        property: 'twitter:description',
        content: 'Halaman tidak ditemukan. Silahkan kembali ke halaman awal.'
      },
      {
        property: 'twiter:title',
        content: 'Page Not Found - KepoBro News'
      }
    ]
  };

  return (
    <Container head={head} />
  );
}

export default NotFound;
