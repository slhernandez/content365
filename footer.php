<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package content365
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">

	 	<!-- <div class="site-info">
			<?php do_action( 'content365_credits' ); ?>
			<a href="http://wordpress.org/" rel="generator"><?php printf( __( 'Proudly powered by %s', 'content365' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( __( 'Theme: %1$s by %2$s.', 'content365' ), 'content365', '<a href="http://underscores.me/" rel="designer">Underscores.me</a>' ); ?>
		</div> -->
    <div class="footer-container clearfix">
      <div class="footer-content">

        <div class="logo-container">
          <a href="http://demandmedia.com"><img src="<?php bloginfo('template_directory'); ?>/images/dm_logo_footer.png"></a>
        </div>

        <div class="footer-menu">
          <ul>
            <li><a href="http://www.demandmedia.com/trademark-guidelines/">Trademark Guidelines</a></li>
            <li><a href="http://www.demandmedia.com/terms-of-use/">Terms and Conditions</a></li>
            <li><a href="http://www.demandmedia.com/privacy-policy/">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
    </div>

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>