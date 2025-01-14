import { FC } from 'react';

interface FAQSchemaProps {
  data: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQSchema: FC<FAQSchemaProps> = ({ data }) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};