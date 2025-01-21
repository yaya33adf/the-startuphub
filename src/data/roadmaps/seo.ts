import { JobRoadmap } from "@/types/roadmap";

export const seoRoadmap: JobRoadmap = {
  title: "SEO Specialist Roadmap",
  description: "A comprehensive guide to becoming an SEO Specialist",
  sections: [
    {
      title: "1. SEO Fundamentals",
      steps: [
        {
          id: "seo-basics",
          title: "SEO Basics",
          description: "Learn the fundamentals of Search Engine Optimization",
          status: "required",
          skills: [
            "Search Engine Basics",
            "Keyword Research",
            "On-Page SEO",
            "Off-Page SEO",
            "Technical SEO"
          ],
          resources: [
            {
              name: "Google SEO Starter Guide",
              url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
            },
            {
              name: "Moz SEO Learning Center",
              url: "https://moz.com/beginners-guide-to-seo"
            },
            {
              name: "SEMrush Academy SEO Fundamentals",
              url: "https://www.semrush.com/academy/courses/seo-fundamentals-course-with-greg-gifford"
            }
          ]
        },
        {
          id: "keyword-research",
          title: "Keyword Research & Analysis",
          description: "Master keyword research and competitive analysis",
          status: "required",
          skills: [
            "Keyword Research Tools",
            "Search Intent Analysis",
            "Competitor Analysis",
            "Long-tail Keywords",
            "Keyword Mapping"
          ],
          resources: [
            {
              name: "Ahrefs Keyword Research Guide",
              url: "https://ahrefs.com/keyword-research"
            },
            {
              name: "Google Keyword Planner Guide",
              url: "https://ads.google.com/home/tools/keyword-planner/"
            },
            {
              name: "SEMrush Keyword Research Course",
              url: "https://www.semrush.com/academy/courses/keyword-research"
            }
          ]
        }
      ]
    },
    {
      title: "2. Technical SEO",
      steps: [
        {
          id: "technical-seo",
          title: "Technical SEO Implementation",
          description: "Learn technical aspects of SEO optimization",
          status: "required",
          skills: [
            "Site Architecture",
            "XML Sitemaps",
            "Robots.txt",
            "Schema Markup",
            "Mobile Optimization",
            "Page Speed Optimization"
          ],
          resources: [
            {
              name: "Google Search Console Training",
              url: "https://developers.google.com/search/docs/fundamentals/search-console"
            },
            {
              name: "Schema.org Documentation",
              url: "https://schema.org/docs/documents.html"
            },
            {
              name: "Web.dev Performance Course",
              url: "https://web.dev/learn/performance/"
            }
          ]
        },
        {
          id: "analytics-tools",
          title: "Analytics & SEO Tools",
          description: "Master essential SEO tools and analytics",
          status: "required",
          skills: [
            "Google Analytics",
            "Google Search Console",
            "SEMrush",
            "Ahrefs",
            "Screaming Frog"
          ],
          resources: [
            {
              name: "Google Analytics Academy",
              url: "https://analytics.google.com/analytics/academy/"
            },
            {
              name: "Google Search Console Guide",
              url: "https://support.google.com/webmasters/answer/7451184"
            },
            {
              name: "Screaming Frog Guide",
              url: "https://www.screamingfrog.co.uk/seo-spider/user-guide/"
            }
          ]
        }
      ]
    },
    {
      title: "3. Content & Link Building",
      steps: [
        {
          id: "content-optimization",
          title: "Content Optimization",
          description: "Learn content optimization strategies for SEO",
          status: "required",
          skills: [
            "Content Strategy",
            "On-Page Optimization",
            "Content Writing",
            "E-A-T Principles",
            "Featured Snippets Optimization"
          ],
          resources: [
            {
              name: "Google E-A-T Guidelines",
              url: "https://developers.google.com/search/blog/2019/08/core-updates"
            },
            {
              name: "Yoast SEO Content Guide",
              url: "https://yoast.com/complete-guide-seo-copywriting/"
            },
            {
              name: "Content Marketing Institute",
              url: "https://contentmarketinginstitute.com/articles/"
            }
          ]
        },
        {
          id: "link-building",
          title: "Link Building Strategies",
          description: "Master link building and outreach techniques",
          status: "recommended",
          skills: [
            "Backlink Analysis",
            "Outreach Techniques",
            "Guest Posting",
            "Broken Link Building",
            "Digital PR"
          ],
          resources: [
            {
              name: "Ahrefs Link Building Guide",
              url: "https://ahrefs.com/blog/link-building/"
            },
            {
              name: "Moz Link Building Guide",
              url: "https://moz.com/beginners-guide-to-link-building"
            },
            {
              name: "Backlinko Link Building Strategies",
              url: "https://backlinko.com/link-building-strategies"
            }
          ]
        }
      ]
    }
  ]
};