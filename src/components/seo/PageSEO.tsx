import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
}

export const PageSEO = ({ title, description }: PageSEOProps) => {
  return (
    <Helmet>
      <title>{title} | TrendSpot</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};