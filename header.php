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

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
	<header id="masthead" class="site-header" role="banner">

		<div class="headerAndNavContainer">
			<div class="headerAndNavContent">
				<div class="headerAndNavContentInner">
					<div class="headerContainer">
						<div class="headerContent">
							<h1 class="logo">
								<a href="#"><img src="<?php bloginfo('template_directory'); ?>/images/dm_logo.png" alt="Demand Media Logo" title="Demand Media Logo"></a>
							</h1>
						</div>
					</div>
					<div class="navContainer">
						<nav class="navContent">
							<ul>
								<li><a href="#">Content</a></li>
								<li><a href="#">Solutions</a></li>
								<li><a href="#">Contributors</a></li>
								<li><a href="#">Tips & Tricks</a></li>
								<li><a href="#">Contact</a></li>
								<li><a href="#">Login</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<!--<div class="header-container clearfix">
			<header>
				<div class="header-content">
					<h1 class="logo">
						<a href="#"><img src="<?php bloginfo('template_directory'); ?>/images/dm_logo.png" alt="Demand Media Logo" title="Demand Media Logo"></a>
					</h1>
				</div>
				<div class="nav-content">
					<nav class="navContent">
						<ul>
							<li><a href="#">Content</a></li>
							<li><a href="#">Solutions</a></li>
							<li><a href="#">Contributors</a></li>
							<li><a href="#">Tips & Tricks</a></li>
							<li><a href="#">Contact</a></li>
							<li><a href="#">Login</a></li>
						</ul>
					</nav>
				</div>
			</header> -->
		</div>

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
