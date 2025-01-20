import { FC } from 'react';

interface ArticleSchemaProps {
  data: {
    title: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
    category?: string;
    tags?: string[];
  };
}

export const ArticleSchema: FC<ArticleSchemaProps> = ({ data }) => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image || `${window.location.origin}/og-image.png`,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      '@type': 'Person',
      name: data.authorName
    },
    publisher: {
      '@type': 'Organization',
      name: 'TrendSpot',
      logo: {
        '@type': 'ImageObject',
        url: `${window.location.origin}/og-image.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href
    },
    ...(data.category && {
      articleSection: data.category
    }),
    ...(data.tags?.length && {
      keywords: data.tags.join(', ')
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
};