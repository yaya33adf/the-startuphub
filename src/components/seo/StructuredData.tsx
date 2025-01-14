import { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface StructuredDataProps {
  type?: 'website' | 'article' | 'faq';
  articleData?: {
    title: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
  };
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
}

export const StructuredData: FC<StructuredDataProps> = ({ type = 'website', articleData, faqData }) => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  // Organization Schema
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

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Startup Hub',
    url: window.location.origin,
    description: 'Market Trends & Business Opportunities',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${window.location.origin}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  // Breadcrumb Schema
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

  // Article Schema (only included when type is 'article' and articleData is provided)
  const articleSchema = articleData ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleData.title,
    description: articleData.description,
    image: articleData.image || `${window.location.origin}/og-image.png`,
    datePublished: articleData.datePublished,
    dateModified: articleData.dateModified,
    author: {
      '@type': 'Person',
      name: articleData.authorName
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Startup Hub',
      logo: {
        '@type': 'ImageObject',
        url: `${window.location.origin}/og-image.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    }
  } : null;

  // FAQ Schema (only included when type is 'faq' and faqData is provided)
  const faqSchema = faqData ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {type === 'article' && articleData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {type === 'faq' && faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
};