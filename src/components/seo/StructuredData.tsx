import { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface StructuredDataProps {
  type?: 'website' | 'article' | 'faq' | 'howto' | 'product';
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
  howToData?: {
    name: string;
    description: string;
    image?: string;
    estimatedCost?: {
      currency: string;
      value: number;
    };
    steps: Array<{
      name: string;
      text: string;
      image?: string;
    }>;
    tools?: Array<{
      name: string;
      requiredStatus?: 'required' | 'recommended' | 'optional';
    }>;
    totalTime?: string;
  };
  productData?: {
    name: string;
    description: string;
    image: string;
    brand?: string;
    price: number;
    priceCurrency: string;
    sku?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    review?: {
      reviewRating: number;
      author: string;
      reviewBody?: string;
    };
  };
}

export const StructuredData: FC<StructuredDataProps> = ({ 
  type = 'website', 
  articleData, 
  faqData,
  howToData,
  productData 
}) => {
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

  // Article Schema
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

  // FAQ Schema
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

  // HowTo Schema
  const howToSchema = howToData ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToData.name,
    description: howToData.description,
    image: howToData.image,
    estimatedCost: howToData.estimatedCost ? {
      '@type': 'MonetaryAmount',
      currency: howToData.estimatedCost.currency,
      value: howToData.estimatedCost.value
    } : undefined,
    step: howToData.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image
    })),
    tool: howToData.tools?.map(tool => ({
      '@type': 'HowToTool',
      name: tool.name,
      requiredStatus: tool.requiredStatus
    })),
    totalTime: howToData.totalTime
  } : null;

  // Product Schema
  const productSchema = productData ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productData.name,
    description: productData.description,
    image: productData.image,
    brand: productData.brand ? {
      '@type': 'Brand',
      name: productData.brand
    } : undefined,
    offers: {
      '@type': 'Offer',
      price: productData.price,
      priceCurrency: productData.priceCurrency,
      availability: `https://schema.org/${productData.availability || 'InStock'}`
    },
    sku: productData.sku,
    review: productData.review ? {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: productData.review.reviewRating
      },
      author: {
        '@type': 'Person',
        name: productData.review.author
      },
      reviewBody: productData.review.reviewBody
    } : undefined
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
      {type === 'howto' && howToData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      {type === 'product' && productData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
    </>
  );
};