import { FC } from 'react';
import { OrganizationSchema } from './schemas/OrganizationSchema';
import { WebsiteSchema } from './schemas/WebsiteSchema';
import { BreadcrumbSchema } from './schemas/BreadcrumbSchema';
import { ArticleSchema } from './schemas/ArticleSchema';
import { FAQSchema } from './schemas/FAQSchema';
import { HowToSchema } from './schemas/HowToSchema';
import { ProductSchema } from './schemas/ProductSchema';

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
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema />
      {type === 'article' && articleData && (
        <ArticleSchema data={articleData} />
      )}
      {type === 'faq' && faqData && (
        <FAQSchema data={faqData} />
      )}
      {type === 'howto' && howToData && (
        <HowToSchema data={howToData} />
      )}
      {type === 'product' && productData && (
        <ProductSchema data={productData} />
      )}
    </>
  );
};