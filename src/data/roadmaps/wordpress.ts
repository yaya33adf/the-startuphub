import { JobRoadmap } from "@/types/roadmap";

export const wordpressRoadmap: JobRoadmap = {
  title: "WordPress Developer Roadmap",
  description: "A comprehensive guide to becoming a WordPress Developer",
  sections: [
    {
      title: "1. WordPress Fundamentals",
      steps: [
        {
          id: "wp-basics",
          title: "WordPress Basics",
          description: "Learn WordPress core concepts and administration",
          status: "required",
          skills: [
            "WordPress Installation",
            "Admin Dashboard",
            "Content Management",
            "Plugins & Themes",
            "WordPress Hosting"
          ],
          resources: [
            {
              name: "WordPress.org Documentation",
              url: "https://wordpress.org/documentation/"
            }
          ]
        },
        {
          id: "theme-development",
          title: "Theme Development",
          description: "Master WordPress theme development",
          status: "required",
          skills: [
            "HTML/CSS",
            "PHP Basics",
            "WordPress Template Hierarchy",
            "Theme Customization",
            "Child Themes"
          ],
          resources: [
            {
              name: "WordPress Theme Handbook",
              url: "https://developer.wordpress.org/themes/"
            }
          ]
        }
      ]
    },
    {
      title: "2. Advanced WordPress Development",
      steps: [
        {
          id: "plugin-development",
          title: "Plugin Development",
          description: "Learn to create WordPress plugins",
          status: "required",
          skills: [
            "PHP Advanced",
            "WordPress Plugin API",
            "WordPress Hooks",
            "Database Integration",
            "Security Best Practices"
          ],
          resources: [
            {
              name: "WordPress Plugin Handbook",
              url: "https://developer.wordpress.org/plugins/"
            }
          ]
        },
        {
          id: "wp-optimization",
          title: "Performance & Security",
          description: "Advanced WordPress optimization and security",
          status: "recommended",
          skills: [
            "Caching",
            "Performance Optimization",
            "Security Hardening",
            "SEO Optimization",
            "Maintenance"
          ],
          resources: [
            {
              name: "WordPress Security Guide",
              url: "https://wordpress.org/support/article/hardening-wordpress/"
            }
          ]
        }
      ]
    }
  ]
};