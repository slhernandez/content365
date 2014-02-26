<?php
/**
 * content365 functions and definitions
 *
 * @package content365
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

if ( ! function_exists( 'content365_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function content365_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on content365, use a find and replace
	 * to change 'content365' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'content365', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	//add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'content365' ),
	) );

	// Enable support for Post Formats.
	add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );

	// Setup the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'content365_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif; // content365_setup
add_action( 'after_setup_theme', 'content365_setup' );

/**
 * Register widgetized area and update sidebar with default widgets.
 */
function content365_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'content365' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}
add_action( 'widgets_init', 'content365_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function content365_scripts() {

	wp_enqueue_style( 'content365-style', get_stylesheet_uri() );

	/*wp_enqueue_style( 'gothamfont', 'http://cloud.typography.com/6676432/688122/css/fonts.css' );*/
	wp_enqueue_style( 'gothamfont', 'http://cloud.typography.com/7722472/751784/css/fonts.css' );

	/*wp_enqueue_script( 'googlemaps', 'http://maps.googleapis.com/maps/api/js?sensor=false', array(), false );*/

	wp_enqueue_script( 'content365-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', false );

	wp_enqueue_script( 'content365-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', false );

	wp_enqueue_script( 'content365-config', get_template_directory_uri() . '/js/config.js', array('jquery'), '20131208', false );

	wp_enqueue_script( 'content365-backstretch', get_template_directory_uri() . '/js/backstretch.min.js', array('jquery'), '201312008', false );

	wp_enqueue_script( 'content365-fitvids', get_template_directory_uri() . '/js/jquery.fitvids.js', array('jquery'), '20140219', false );

	wp_enqueue_script( 'content365-photoset', get_template_directory_uri() . '/js/photoset-grid.min.js', array('jquery'), '20141402', false );

	wp_enqueue_script( 'content365-underscore', get_template_directory_uri() . '/js/underscore.min.js', array(), '20140225', false );

	wp_enqueue_script( 'content365-waypoints', get_template_directory_uri() . '/js/waypoints.min.js', array('jquery'), '201312008', false );

	wp_register_script( 'content365-static-page', get_template_directory_uri() . '/js/static-page.js', array('jquery'), '201312008', false );


	wp_enqueue_script( 'content365-static-page' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'content365_scripts' );

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

// add ie conditional html5 shim to header
function add_ie_html5_shim () {
    echo '<!--[if lt IE 9]>';
    echo '<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>';
    echo '<![endif]-->';
}
add_action('wp_head', 'add_ie_html5_shim');
