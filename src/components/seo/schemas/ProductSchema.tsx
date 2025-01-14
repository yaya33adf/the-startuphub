import { FC } from 'react';

interface ProductSchemaProps {
  data: {
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

export const ProductSchema: FC<ProductSchemaProps> = ({ data }) => {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    image: data.image,
    brand: data.brand ? {
      '@type': 'Brand',
      name: data.brand
    } : undefined,
    offers: {
      '@type': 'Offer',
      price: data.price,
      priceCurrency: data.priceCurrency,
      availability: `https://schema.org/${data.availability || 'InStock'}`
    },
    sku: data.sku,
    review: data.review ? {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: data.review.reviewRating
      },
      author: {
        '@type': 'Person',
        name: data.review.author
      },
      reviewBody: data.review.reviewBody
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
};