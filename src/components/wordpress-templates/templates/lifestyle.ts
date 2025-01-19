import { WordPressTemplate } from "../types";

export const lifestyleTemplates: WordPressTemplate[] = [
  {
    id: 4,
    name: "EcoStart",
    description: "Sustainable and eco-friendly WordPress theme for green startups",
    previewImage: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop",
    features: ["Carbon Footprint Calculator", "Sustainability Metrics", "Green Color Schemes", "Environmental Impact Sections"],
    category: "Sustainability",
    themeFiles: {
      style: `/*
Theme Name: EcoStart
Theme URI: https://example.com/eco-start
Author: The Startup Hub
Description: Theme for eco-friendly startups
Version: 1.0.0
*/

:root {
  --eco-green: #059669;
  --leaf: #34d399;
}

.eco-section {
  background-color: rgba(5, 150, 105, 0.1);
  border-radius: 8px;
}`,
      functions: `<?php
function eco_start_setup() {
  add_theme_support('custom-colors');
  add_theme_support('editor-color-palette');
  add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'eco_start_setup');`,
      index: `<?php get_header(); ?>

<main class="eco-main">
  <?php get_template_part('template-parts/sustainability'); ?>
  <?php get_template_part('template-parts/impact'); ?>
</main>

<?php get_footer(); ?>`,
      header: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>`,
      footer: `<footer class="eco-footer">
  <?php wp_footer(); ?>
</footer>
</body>
</html>`,
      screenshot: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.8",
    testedUpTo: "6.4",
    tags: ["eco-friendly", "sustainability", "green"]
  },
  {
    id: 8,
    name: "Food Tech",
    description: "Delicious theme for food delivery and restaurant tech startups",
    previewImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
    features: ["Online Ordering", "Restaurant Dashboard", "Menu Management", "Delivery Tracking"],
    category: "Food",
    themeFiles: {
      style: `/*
Theme Name: Food Tech
Theme URI: https://example.com/food-tech
Author: The Startup Hub
Description: Theme for food tech startups
Version: 1.0.0
*/

:root {
  --food-red: #ef4444;
  --menu-orange: #f97316;
}

.menu-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}`,
      functions: `<?php
function food_tech_setup() {
  add_theme_support('custom-spacing');
  add_theme_support('custom-line-height');
  add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'food_tech_setup');`,
      index: `<?php get_header(); ?>

<main class="food-main">
  <?php get_template_part('template-parts/menu'); ?>
  <?php get_template_part('template-parts/ordering'); ?>
</main>

<?php get_footer(); ?>`,
      header: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>`,
      footer: `<footer class="food-footer">
  <?php wp_footer(); ?>
</footer>
</body>
</html>`,
      screenshot: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.8",
    testedUpTo: "6.4",
    tags: ["food-delivery", "restaurants", "ordering"]
  },
  {
    id: 10,
    name: "Gaming Hub",
    description: "Epic theme for gaming and esports startups",
    previewImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
    features: ["Tournament Management", "Team Profiles", "Live Streaming", "Game Statistics"],
    category: "Gaming",
    themeFiles: {
      style: `/*
Theme Name: Gaming Hub
Theme URI: https://example.com/gaming-hub
Author: The Startup Hub
Description: Theme for gaming startups
Version: 1.0.0
*/

:root {
  --gamer-purple: #7c3aed;
  --neon-pink: #ec4899;
}

.tournament-card {
  background: linear-gradient(135deg, var(--gamer-purple), var(--neon-pink));
  border-radius: 12px;
  color: white;
}`,
      functions: `<?php
function gaming_hub_setup() {
  add_theme_support('dark-mode');
  add_theme_support('custom-spacing');
  add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'gaming_hub_setup');`,
      index: `<?php get_header(); ?>

<main class="gaming-main">
  <?php get_template_part('template-parts/tournaments'); ?>
  <?php get_template_part('template-parts/streams'); ?>
</main>

<?php get_footer(); ?>`,
      header: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>`,
      footer: `<footer class="gaming-footer">
  <?php wp_footer(); ?>
</footer>
</body>
</html>`,
      screenshot: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.8",
    testedUpTo: "6.4",
    tags: ["gaming", "esports", "streaming"]
  }
];