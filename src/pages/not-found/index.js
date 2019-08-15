import React from 'react';

import Container from 'pages/not-found/not-found';

const NotFound = () => {
  const head = {
    title: 'Page Not Found - KepoBro News',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Halaman tidak ditemukan. Silahkan kembali ke halaman awal.'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Page Not Found - KepoBro News'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Halaman tidak ditemukan. Silahkan kembali ke halaman awal.'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Page Not Found - KepoBro News'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://news.andriannus.id'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Halaman tidak ditemukan. Silahkan kembali ke halaman awal.'
      },
      {
        hid: 'twiter:title',
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
