import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const BreadcrumbSchema: FC = () => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: window.location.origin
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: location.pathname.split('/')[1] || 'Home',
        item: currentUrl
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};