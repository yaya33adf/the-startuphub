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
          description: "Master core WordPress concepts and architecture",
          status: "required",
          skills: [
            "WordPress Installation",
            "Admin Dashboard",
            "Posts & Pages",
            "Themes & Plugins",
            "WordPress Loop",
            "Settings & Configuration"
          ],
          resources: [
            {
              name: "WordPress Documentation",
              url: "https://wordpress.org/documentation"
            },
            {
              name: "WordPress Codex",
              url: "https://codex.wordpress.org"
            }
          ]
        },
        {
          id: "php-mysql",
          title: "PHP & MySQL",
          description: "Learn essential PHP and MySQL for WordPress development",
          status: "required",
          skills: [
            "PHP Syntax",
            "MySQL Queries",
            "Database Management",
            "WordPress Database Structure",
            "PHP Functions",
            "Error Handling"
          ],
          resources: [
            {
              name: "PHP Documentation",
              url: "https://www.php.net/docs.php"
            }
          ]
        }
      ]
    },
    {
      title: "2. Theme Development",
      steps: [
        {
          id: "theme-development",
          title: "Theme Development",
          description: "Learn to create custom WordPress themes",
          status: "required",
          skills: [
            "Theme Structure",
            "Template Hierarchy",
            "Custom Post Types",
            "Theme Functions",
            "WordPress Hooks",
            "Child Themes"
          ],
          resources: [
            {
              name: "Theme Handbook",
              url: "https://developer.wordpress.org/themes"
            }
          ]
        }
      ]
    }
  ]
};