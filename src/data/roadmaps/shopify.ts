import { JobRoadmap } from "@/types/roadmap";

export const shopifyRoadmap: JobRoadmap = {
  title: "Shopify Developer Roadmap",
  description: "A comprehensive guide to becoming a Shopify Developer",
  sections: [
    {
      title: "1. Shopify Fundamentals",
      steps: [
        {
          id: "shopify-basics",
          title: "Shopify Basics",
          description: "Master core Shopify concepts and platform features",
          status: "required",
          skills: [
            "Shopify Admin",
            "Store Setup",
            "Product Management",
            "Collections",
            "Order Processing",
            "Analytics"
          ],
          resources: [
            {
              name: "Shopify Documentation",
              url: "https://shopify.dev/docs"
            },
            {
              name: "Shopify Partners",
              url: "https://www.shopify.com/partners"
            }
          ]
        },
        {
          id: "liquid-theme",
          title: "Liquid & Theme Development",
          description: "Learn Shopify's template language and theme development",
          status: "required",
          skills: [
            "Liquid Syntax",
            "Theme Architecture",
            "Templates",
            "Sections",
            "Snippets",
            "Theme Settings"
          ],
          resources: [
            {
              name: "Liquid Documentation",
              url: "https://shopify.dev/docs/themes/liquid/reference"
            }
          ]
        }
      ]
    },
    {
      title: "2. Advanced Development",
      steps: [
        {
          id: "app-development",
          title: "App Development",
          description: "Create custom Shopify applications",
          status: "required",
          skills: [
            "API Fundamentals",
            "App Bridge",
            "GraphQL",
            "Webhooks",
            "Authentication",
            "App Extensions"
          ],
          resources: [
            {
              name: "App Development Guide",
              url: "https://shopify.dev/docs/apps"
            }
          ]
        }
      ]
    }
  ]
};