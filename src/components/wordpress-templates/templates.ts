import { WordPressTemplate } from "./types";

export const templates: WordPressTemplate[] = [
  {
    id: 1,
    name: "TechLaunch Pro",
    description: "Modern and minimalist template perfect for SaaS startups",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    features: ["Responsive Design", "WooCommerce Ready", "SEO Optimized", "Custom Widgets"],
    category: "SaaS",
    themeFiles: {
      style: `/*
Theme Name: TechLaunch Pro
Theme URI: https://example.com/techlaunch-pro
Author: The Startup Hub
Author URI: https://example.com
Description: A modern WordPress theme for SaaS and tech startups
Version: 1.0.0
Requires at least: 5.0
Tested up to: 6.4
Requires PHP: 7.4
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

/* Theme styles */
body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
}

.site-header {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 1rem 0;
}

.hero-section {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  padding: 4rem 0;
}`,
      functions: `<?php
/**
 * TechLaunch Pro functions and definitions
 */

if ( ! defined( '_S_VERSION' ) ) {
  define( '_S_VERSION', '1.0.0' );
}

function techlaunch_setup() {
  add_theme_support( 'title-tag' );
  add_theme_support( 'post-thumbnails' );
  add_theme_support( 'woocommerce' );
  
  register_nav_menus(
    array(
      'primary' => esc_html__( 'Primary', 'techlaunch' ),
      'footer'  => esc_html__( 'Footer', 'techlaunch' ),
    )
  );
}
add_action( 'after_setup_theme', 'techlaunch_setup' );`,
      index: `<?php get_header(); ?>

<main id="primary" class="site-main">
  <?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : ?>
      <?php the_post(); ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header">
          <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
        </header>

        <div class="entry-content">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; ?>
  <?php endif; ?>
</main>

<?php get_footer(); ?>`,
      header: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  
  <header id="masthead" class="site-header">
    <div class="container">
      <div class="site-branding">
        <?php the_custom_logo(); ?>
      </div>

      <nav id="site-navigation" class="main-navigation">
        <?php
        wp_nav_menu(
          array(
            'theme_location' => 'primary',
            'menu_id'        => 'primary-menu',
          )
        );
        ?>
      </nav>
    </div>
  </header>`,
      footer: `<footer id="colophon" class="site-footer">
  <div class="container">
    <div class="site-info">
      <?php
      printf(
        esc_html__( '© %d %s. All rights reserved.', 'techlaunch' ),
        date('Y'),
        get_bloginfo( 'name' )
      );
      ?>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>`,
      screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.0",
    testedUpTo: "6.4",
    tags: ["responsive-layout", "custom-colors", "custom-menu", "featured-images", "threaded-comments", "translation-ready"]
  },
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
    id: 3,
    name: "AI Studio",
    description: "Modern theme for AI and machine learning startups",
    previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    features: ["Interactive Animations", "API Integration", "Code Syntax Highlighting", "Demo Sections"],
    category: "Technology",
    themeFiles: {
      style: `/*
Theme Name: AI Studio
Theme URI: https://example.com/ai-studio
Author: The Startup Hub
Description: Modern theme for AI startups
Version: 1.0.0
*/

:root {
  --primary: #2563eb;
  --secondary: #7c3aed;
}

.ai-demo {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 16px;
  padding: 2rem;
}`,
      functions: `<?php
function ai_studio_setup() {
  add_theme_support('editor-styles');
  add_theme_support('responsive-embeds');
  add_theme_support('custom-spacing');
}
add_action('after_setup_theme', 'ai_studio_setup');`,
      index: `<?php get_header(); ?>

<main class="ai-workspace">
  <?php get_template_part('template-parts/ai-demo'); ?>
  <?php get_template_part('template-parts/features'); ?>
</main>

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
      screenshot: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.8",
    testedUpTo: "6.4",
    tags: ["ai", "machine-learning", "code-highlighting"]
  },
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
    id: 9,
    name: "IoT Connect",
    description: "Advanced theme for Internet of Things and smart device startups",
    previewImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop",
    features: ["Device Management", "Real-time Monitoring", "IoT Dashboard", "Sensor Analytics"],
    category: "IoT",
    themeFiles: {
      style: `/*
Theme Name: IoT Connect
Theme URI: https://example.com/iot-connect
Author: The Startup Hub
Description: Theme for IoT startups
Version: 1.0.0
*/

:root {
  --device-blue: #0284c7;
  --sensor-green: #059669;
}

.device-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
}`,
      functions: `<?php
function iot_connect_setup() {
  add_theme_support('custom-spacing');
  add_theme_support('align-wide');
  add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'iot_connect_setup');`,
      index: `<?php get_header(); ?>

<main class="iot-main">
  <?php get_template_part('template-parts/devices'); ?>
  <?php get_template_part('template-parts/analytics'); ?>
</main>

<?php get_footer(); ?>`,
      header: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>`,
      footer: `<footer class="iot-footer">
  <?php wp_footer(); ?>
</footer>
</body>
</html>`,
      screenshot: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop"
    },
    version: "1.0.0",
    requires: "5.8",
    testedUpTo: "6.4",
    tags: ["iot", "smart-devices", "monitoring"]
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