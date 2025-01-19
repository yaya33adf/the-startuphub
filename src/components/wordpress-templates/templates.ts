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

/* Header styles */
.site-header {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 1rem 0;
}

/* Hero section */
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
add_action( 'after_setup_theme', 'techlaunch_setup' );

function techlaunch_scripts() {
  wp_enqueue_style( 'techlaunch-style', get_stylesheet_uri(), array(), _S_VERSION );
  wp_enqueue_script( 'techlaunch-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'techlaunch_scripts' );`,
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
  // ... Add more templates with similar structure
];