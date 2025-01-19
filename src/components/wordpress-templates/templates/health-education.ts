import { WordPressTemplate } from "../types";

export const healthEducationTemplates: WordPressTemplate[] = [
  {
    id: 5,
    name: "Health Tech",
    description: "Professional theme for healthcare and medical tech startups",
    previewImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    features: ["HIPAA Compliant Forms", "Medical Icons", "Appointment Booking", "Patient Portal Ready"],
    category: "Healthcare",
    themeFiles: {
      style: `/*
Theme Name: Health Tech
Theme URI: https://example.com/health-tech
Author: The Startup Hub
Description: Theme for healthcare startups
Version: 1.0.0
*/

:root {
  --medical-blue: #0369a1;
  --clean-white: #f8fafc;
}

.medical-card {
  background: var(--clean-white);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
      functions: `<?php
function health_tech_setup() {
  add_theme_support('custom-spacing');
  add_theme_support('custom-line-height');
  add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'health_tech_setup');`,
      index: `<?php get_header(); ?>

<main class="medical-main">
  <?php get_template_part('template-parts/appointments'); ?>
  <?php get_template_part('template-parts/services'); ?>
</main>

<?php get_footer(); ?>`,
      header: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>`,
      footer: `<footer class="medical-footer">
  <?php wp_footer(); ?>
</footer>
</body>
</html>`,
      screenshot: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.8",
    testedUpTo: "6.4",
    tags: ["healthcare", "medical", "appointments"]
  },
  {
    id: 6,
    name: "EdTech Pro",
    description: "Feature-rich theme for education technology startups",
    previewImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
    features: ["LMS Integration", "Course Management", "Student Dashboard", "Interactive Quizzes"],
    category: "Education",
    themeFiles: {
      style: `/*
Theme Name: EdTech Pro
Theme URI: https://example.com/edtech-pro
Author: The Startup Hub
Description: Theme for edtech startups
Version: 1.0.0
*/

:root {
  --edu-purple: #7c3aed;
  --learn-blue: #2563eb;
}

.course-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: transform 0.2s;
}`,
      functions: `<?php
function edtech_pro_setup() {
  add_theme_support('custom-spacing');
  add_theme_support('align-wide');
  add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'edtech_pro_setup');`,
      index: `<?php get_header(); ?>

<main class="education-main">
  <?php get_template_part('template-parts/courses'); ?>
  <?php get_template_part('template-parts/learning'); ?>
</main>

<?php get_footer(); ?>`,
      header: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>`,
      footer: `<footer class="edu-footer">
  <?php wp_footer(); ?>
</footer>
</body>
</html>`,
      screenshot: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.8",
    testedUpTo: "6.4",
    tags: ["education", "lms", "courses"]
  }
];