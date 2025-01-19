import { WordPressTemplate } from "../types";

export const financeTemplates: WordPressTemplate[] = [
  {
    id: 2,
    name: "Fintech Flow",
    description: "Premium WordPress theme for fintech and financial startups",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    features: ["Dark Mode", "Financial Widgets", "Payment Gateway Integration", "Interactive Charts"],
    category: "Finance",
    themeFiles: {
      style: `/*
Theme Name: Fintech Flow
Theme URI: https://example.com/fintech-flow
Author: The Startup Hub
Description: Premium WordPress theme for fintech startups
Version: 1.0.0
*/

body {
  font-family: 'DM Sans', sans-serif;
  background: #f8fafc;
}

.dark-mode {
  background: #0f172a;
  color: #e2e8f0;
}

.finance-widget {
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  padding: 1.5rem;
}`,
      functions: `<?php
function fintech_flow_setup() {
  add_theme_support('dark-mode');
  add_theme_support('custom-logo');
  add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'fintech_flow_setup');`,
      index: `<?php get_header(); ?>

<div class="finance-dashboard">
  <?php get_template_part('template-parts/dashboard/overview'); ?>
  <?php get_template_part('template-parts/dashboard/charts'); ?>
</div>

<?php get_footer(); ?>`,
      header: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>`,
      footer: `<footer class="site-footer">
  <?php wp_footer(); ?>
</footer>
</body>
</html>`,
      screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.8",
    testedUpTo: "6.4",
    tags: ["dark-mode", "finance", "dashboard", "charts"]
  },
  {
    id: 7,
    name: "Crypto Hub",
    description: "Modern theme for cryptocurrency and blockchain startups",
    previewImage: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&auto=format&fit=crop",
    features: ["Real-time Crypto Prices", "Blockchain Explorer Integration", "Wallet Connect", "Trading Widgets"],
    category: "Cryptocurrency",
    themeFiles: {
      style: `/*
Theme Name: Crypto Hub
Theme URI: https://example.com/crypto-hub
Author: The Startup Hub
Description: Theme for crypto startups
Version: 1.0.0
*/

:root {
  --crypto-orange: #f59e0b;
  --blockchain-blue: #3b82f6;
}

.crypto-widget {
  background: #1e293b;
  color: white;
  border-radius: 12px;
}`,
      functions: `<?php
function crypto_hub_setup() {
  add_theme_support('dark-mode');
  add_theme_support('custom-spacing');
  add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'crypto_hub_setup');`,
      index: `<?php get_header(); ?>

<main class="crypto-main">
  <?php get_template_part('template-parts/prices'); ?>
  <?php get_template_part('template-parts/wallet'); ?>
</main>

<?php get_footer(); ?>`,
      header: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>`,
      footer: `<footer class="crypto-footer">
  <?php wp_footer(); ?>
</footer>
</body>
</html>`,
      screenshot: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.8",
    testedUpTo: "6.4",
    tags: ["cryptocurrency", "blockchain", "trading"]
  }
];