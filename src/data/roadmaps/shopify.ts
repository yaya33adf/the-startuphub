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
          description: "Learn Shopify platform basics and store management",
          status: "required",
          skills: [
            "Shopify Admin",
            "Store Setup",
            "Product Management",
            "Order Processing",
            "Theme Customization"
          ],
          resources: [
            {
              name: "Shopify Documentation",
              url: "https://shopify.dev/docs"
            }
          ]
        },
        {
          id: "liquid-templates",
          title: "Liquid Templates",
          description: "Master Shopify's Liquid templating language",
          status: "required",
          skills: [
            "Liquid Syntax",
            "Objects",
            "Tags",
            "Filters",
            "Theme Architecture"
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
      title: "2. Advanced Shopify Development",
      steps: [
        {
          id: "theme-development",
          title: "Theme Development",
          description: "Learn to create custom Shopify themes",
          status: "required",
          skills: [
            "Theme Structure",
            "Sections & Blocks",
            "CSS/SCSS",
            "JavaScript",
            "Theme Settings"
          ],
          resources: [
            {
              name: "Shopify Theme Development",
              url: "https://shopify.dev/themes"
            }
          ]
        },
        {
          id: "app-development",
          title: "App Development",
          description: "Build custom Shopify applications",
          status: "recommended",
          skills: [
            "Shopify API",
            "App Bridge",
            "GraphQL",
            "Webhooks",
            "Authentication"
          ],
          resources: [
            {
              name: "Shopify App Development",
              url: "https://shopify.dev/apps"
            }
          ]
        }
      ]
    }
  ]
};