<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package content365
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<div class="siteWrapper">
				<section class="error-404 not-found">
					<header class="page-header">
						<h1 class="page-title"><?php _e( 'Page can&rsquo;t be found!', 'content365' ); ?></h1>
						<p>Sorry, but the page you were looking for could not be found. You might be interested in...</p>
					</header><!-- .page-header -->

					<div class="page-content dm-sites">
						<a href="http://contentsolutions.demandstudios.com"><div class="contentsolutions-site">
							<span class="e-overlay"></span>
							<div class="e-marketing">
								<h2>Content Solutions</h2>
								<p>Let content tell your story</p>
							</div>
							<img src="<?php bloginfo('template_directory'); ?>/images/error404/cs-home.jpg" alt="Content Solutions" title="Content Solutions" />
						</div></a>
						<a href="http://demandmedia.com"><div class="demandmedia-site">
							<span class="e-overlay"></span>
							<div class="e-marketing">
								<h2>Demand Media</h2>
								<p>Content for real life.</p>
							</div>
							<img src="<?php bloginfo('template_directory'); ?>/images/error404/dm-home.jpg" alt="Demand Media" title="Demand Media" />
						</div></a>
						<a href="http://demandstudios.com"><div class="demandstudios-site">
							<span class="e-overlay"></span>
							<div class="e-marketing">
								<h2>Demand Studios</h2>
								<p>Create. Engage. Stand Out.</p>
							</div>
							<img src="<?php bloginfo('template_directory'); ?>/images/error404/ds-home.jpg" alt="Demand Studios" title="Demand Studios" />
						</div></a>
					</div><!-- .page-content -->

				</section><!-- .error-404 -->
			</div> <!-- end of siteWrapper -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>