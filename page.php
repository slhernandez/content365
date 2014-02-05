<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package content365
 */

get_header(); ?>


<?php echo '<h1>' . is_page('work/experian') . '</h1>'; ?>
<?php
	if ( is_page( 'experian' ) ) {
		get_template_part('content', 'experian');
	} elseif ( is_page('sfgate') ) {
		get_template_part('content', 'sfgate');
	} elseif ( is_page('work') ) {
		get_template_part('content', 'work');
	}
?>

<?php get_footer(); ?>
