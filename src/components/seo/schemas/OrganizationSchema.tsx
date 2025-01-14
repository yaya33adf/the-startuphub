import { FC } from 'react';

export const OrganizationSchema: FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Startup Hub',
    url: window.location.origin,
    logo: `${window.location.origin}/og-image.png`,
    description: 'Your comprehensive platform for tracking market trends, exploring opportunities, and discovering side hustles',
    sameAs: [
      'https://twitter.com/startuphub',
      'https://linkedin.com/company/startuphub',
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};