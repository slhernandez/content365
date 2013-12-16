<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package content365
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<script type="text/javascript">
var templateUrl = '<?= get_bloginfo("template_url"); ?>';
</script>
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
	<header id="masthead" class="site-header" role="banner">

		<div class="headerAndNavContainer sticky">
			<div class="headerAndNavContent">
				<div class="headerAndNavContentInner">
					<div class="headerContainer">
						<div class="headerContent">
							<h1 class="logo">
								<a href="#hero" class="anchorLink">
									<img class="gray-logo" src="<?php bloginfo('template_directory'); ?>/images/dm_logo_white.png" alt="Demand Media Logo" title="Demand Media Logo">
									<img class="white-logo" src="<?php bloginfo('template_directory'); ?>/images/dm_logo_white.png" alt="Demand Media Logo" title="Demand Media Logo">
								</a>
							</h1>
						</div>
					</div>
					<div class="navHeading">
						<div class="navContainer">
							<div class="mobile-menu">
								<p><a href="#">Menu</a></p>
							</div>
							<!-- <div class="menu-icon">
								<a href="#" class="icon-alone">
									<span data-air-icon="&#xEE06;"></span>
									<span class="screen-reader-text">Menu</span>
								</a>	
							</div> -->
							<nav class="navContent active">
								<ul>
									<li><a href="#our-content" class="anchorLink">Content</a></li>
									<li><a href="#solutions" class="anchorLink">Solutions</a></li>
									<li><a href="#contributors" class="anchorLink">Contributors</a></li>
									<li><a href="#tipsandtricks" class="anchorLink">Tips & Tricks</a></li>
									<!--<li><a href="#blog" class="anchorLink">Blog</a></li>-->
									<li><a href="#login" class="anchorLink login">Login</a></li>
								</ul>
							</nav>
						</div> <!-- end of navContainer -->
					</div> <!-- end of navHeading -->
				</div>
			</div>
		</div> <!-- end headerAndNavContainer -->

		<!--<section class="hero-container">
    <h1 class="hero-heading">Providing Partners Comprehensive <span class="highlight">Content</span> Offerings To Attract And Engage Intent Driven Audiences</h1>
    <span class="hero-overlay"></span>
	  </section> -->

		<div class="site-branding">
			<!-- <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>-->
			<!-- <h2 class="site-description"><?php bloginfo( 'description' ); ?></h2> -->
		</div>

		<nav id="site-navigation" class="main-navigation" role="navigation">
			<!-- <h1 class="menu-toggle"><?php _e( 'Menu', 'content365' ); ?></h1> -->
			<!-- <a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'content365' ); ?></a> -->

			<!-- <?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?> -->
		</nav><!-- #site-navigation -->


	</header><!-- #masthead -->

	<div id="content" class="site-content">
