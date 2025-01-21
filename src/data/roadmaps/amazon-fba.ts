import type { JobRoadmap } from '@/types/roadmap';

export const amazonFbaRoadmap: JobRoadmap = {
  title: "Amazon FBA Specialist Roadmap",
  description: "A comprehensive guide to becoming a successful Amazon FBA (Fulfillment by Amazon) specialist, covering product research, sourcing, listing optimization, and business operations.",
  sections: [
    {
      title: "Amazon FBA Fundamentals",
      steps: [
        {
          id: "fba-basics",
          title: "Understanding FBA Basics",
          description: "Learn the fundamental concepts of Amazon's Fulfillment by Amazon program and how it works.",
          status: "required",
          skills: ["Amazon Seller Central", "FBA Program", "Inventory Management"],
          resources: [
            {
              name: "Amazon FBA University",
              url: "https://sell.amazon.com/fulfillment-by-amazon"
            },
            {
              name: "Seller Central Help",
              url: "https://sellercentral.amazon.com/gp/help/external"
            }
          ]
        },
        {
          id: "seller-account",
          title: "Setting Up Your Seller Account",
          description: "Create and optimize your Amazon seller account, understanding the different account types and their requirements.",
          status: "required",
          skills: ["Account Setup", "Business Registration", "Tax Compliance"],
          resources: [
            {
              name: "Amazon Seller Registration",
              url: "https://sell.amazon.com/register"
            }
          ]
        }
      ]
    },
    {
      title: "Product Research & Sourcing",
      steps: [
        {
          id: "product-research",
          title: "Product Research Mastery",
          description: "Learn how to identify profitable products and analyze market demand using various tools and metrics.",
          status: "required",
          skills: ["Market Research", "Competition Analysis", "Profit Calculation"],
          resources: [
            {
              name: "Jungle Scout",
              url: "https://www.junglescout.com/"
            },
            {
              name: "Helium 10",
              url: "https://www.helium10.com/"
            }
          ]
        },
        {
          id: "supplier-sourcing",
          title: "Supplier Sourcing & Negotiation",
          description: "Find reliable suppliers, negotiate terms, and ensure product quality through proper sourcing practices.",
          status: "required",
          skills: ["Supplier Research", "Negotiation", "Quality Control"],
          resources: [
            {
              name: "Alibaba",
              url: "https://www.alibaba.com/"
            }
          ]
        }
      ]
    },
    {
      title: "Listing Optimization & Marketing",
      steps: [
        {
          id: "listing-optimization",
          title: "Product Listing Optimization",
          description: "Create compelling product listings with optimized titles, bullets, and descriptions for maximum visibility.",
          status: "required",
          skills: ["Keyword Research", "Copywriting", "SEO"],
          resources: [
            {
              name: "Amazon Style Guides",
              url: "https://sellercentral.amazon.com/gp/help/external/G1641?language=en_US"
            }
          ]
        },
        {
          id: "ppc-advertising",
          title: "PPC Campaign Management",
          description: "Master Amazon's advertising platform to create and optimize PPC campaigns for better visibility and sales.",
          status: "recommended",
          skills: ["Amazon PPC", "Bid Management", "Campaign Optimization"],
          resources: [
            {
              name: "Amazon Advertising Console",
              url: "https://advertising.amazon.com/"
            }
          ]
        }
      ]
    },
    {
      title: "Operations & Scale",
      steps: [
        {
          id: "inventory-management",
          title: "Inventory Management",
          description: "Develop systems for effective inventory management and reordering processes.",
          status: "required",
          skills: ["Forecasting", "Reordering", "Storage Management"],
          resources: [
            {
              name: "Inventory Management Guide",
              url: "https://sellercentral.amazon.com/gp/help/external/G201074400"
            }
          ]
        },
        {
          id: "business-analytics",
          title: "Business Analytics & Optimization",
          description: "Track and analyze key metrics to make data-driven decisions for business growth.",
          status: "recommended",
          skills: ["Data Analysis", "Financial Planning", "Business Strategy"],
          resources: [
            {
              name: "Amazon Brand Analytics",
              url: "https://sellercentral.amazon.com/brand-analytics"
            }
          ]
        }
      ]
    }
  ]
};