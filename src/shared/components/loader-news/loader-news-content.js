import React from 'react';
import ContentLoader from 'react-content-loader';

export const Container = () => <Loader />

const Loader = () => {
  const Loaders = [];

  for (let i = 1; i <= 5; i++) {
    Loaders.push(
      <ContentLoader key={i} height={90}>
        <rect x="0" y="0" rx="3" ry="3" width="400" height="12" />
        <rect x="0" y="15" rx="3" ry="3" width="150" height="12" /> 
        <rect x="0" y="40" rx="3" ry="3" width="75" height="12" /> 
      </ContentLoader>
    )
  }

  return Loaders;
}
