import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Container = ({ meta, title }) => {
  return (
    <Helmet>
      <title>{ title }</title>

      {
        meta.map((m, key) => {
          return (
            <meta key={key} name={m.name} content={m.content} />
          )
        })
      }
    </Helmet>
  )
}
