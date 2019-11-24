import React, { useEffect, useState } from 'react';

import { Container } from 'shared/components/seo/seo-content';
import { META_TAG } from 'shared/constants/news.constant';
import { capitalize } from 'shared/utils/string.util';

const SEO = ({ category }) => {
  const [meta, setMeta] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const { notFound, trending } = META_TAG;

    const getTitle = (category) => {
      if (category === 'trending') {
        return trending.title;
      } else if(category === 'notFound') {
        return notFound.title;
      } else {
        return `${capitalize(category)} - KepoBro News`;
      }
    }

    const getDescription = (category) => {
      if (category === 'trending') {
        return trending.description;
      } else if (category === 'notFound') {
        return notFound.description;
      } else {
        return `Berita lengkap dan terupdate mengenai ${category} dari News API`;
      }
    }

    setTitle(getTitle(category))
    setMeta([
      {
        name: 'description',
        content: getDescription(category),
      },
      {
        name: 'title',
        content: getTitle(category),
      },
      {
        name: 'og:description',
        content: getDescription(category),
      },
      {
        name: 'og:title',
        content: getTitle(category),
      },
      {
        name: 'og:url',
        content: 
          `https://news.andriannus.id/${category === 'trending' ? '' : category}`
      },
      {
        name: 'twitter:description',
        content: getDescription(category),
      },
      {
        name: 'twiter:title',
        content: getTitle(category),
      }
    ])
  }, [category]);

  return <Container meta={meta} title={title} />
}

export default SEO;
