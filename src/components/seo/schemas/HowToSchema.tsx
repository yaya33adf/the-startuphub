import { FC } from 'react';

interface HowToSchemaProps {
  data: {
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
}

export const HowToSchema: FC<HowToSchemaProps> = ({ data }) => {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    image: data.image,
    estimatedCost: data.estimatedCost ? {
      '@type': 'MonetaryAmount',
      currency: data.estimatedCost.currency,
      value: data.estimatedCost.value
    } : undefined,
    step: data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image
    })),
    tool: data.tools?.map(tool => ({
      '@type': 'HowToTool',
      name: tool.name,
      requiredStatus: tool.requiredStatus
    })),
    totalTime: data.totalTime
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
};