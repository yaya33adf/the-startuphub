import { FC } from 'react';

export const WebsiteSchema: FC = () => {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Startup Hub',
    url: window.location.origin,
    description: 'Premier platform connecting innovative startups with visionary investors. Discover investment opportunities, track market trends, and grow your business.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${window.location.origin}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    keywords: [
      'startup investment',
      'investor network',
      'business opportunities',
      'startup funding',
      'angel investors',
      'venture capital',
      'startup community',
      'business growth',
      'startup ecosystem',
      'market trends',
      'startup analytics'
    ],
    about: {
      '@type': 'Thing',
      name: 'Startup and Investment Platform',
      description: 'Comprehensive platform for startup growth and investment opportunities'
    },
    audience: {
      '@type': 'Audience',
      audienceType: ['Startups', 'Investors', 'Entrepreneurs', 'Business Professionals']
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
};