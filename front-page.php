<?php
/**
 * The static front-page template file.
 *
 * This template houses the static home page to content365.
 *
 * @package content365
 */

get_header(); ?>

<div class="siteWrapper">
  <section class="hero-container">
    <h1 class="hero-heading">Providing Partners Comprehensive <span class="highlight">Content</span> Offerings To Attract And Engage Intent Driven Audiences</h1>
    <span class="hero-overlay"></span>
  </section> <!-- end of hero-container -->

  <section class="our-content">
    <div class="our-content-container">
      <h1>Our Content</h1>
      <ul class="content-items">
        <li class="all"><a href="#">All</a></li>
        <li class="animated-gif"><a href="#"><span aria-hidden="true" data-air-icon="&#xE8B0;"></span>Animated Gif</a></li>
        <li class="infographics"><a href="#"><span aria-hidden="true" data-air-icon="&#xF601;"></span> Infographics</a></li>
        <li class="photography"><a href="#"><span aria-hidden="true" data-air-icon="&#x1F4F7;"></span>Photography</a></li>
        <li class="quiz"><a href="#"><span aria-hidden="true" data-air-icon="&#xE399;"></span>Quiz</a></li>
        <li class="text"><a href="#"><span aria-hidden="true" data-air-icon="&#xEC00;"></span>Text</a></li>
        <li class="video"><a href="#"><span aria-hidden="true" data-air-icon="&#x1F4F9;"></span>Video</a></li>
      </ul>
      <div class="content-showcase">
        <div class="showcase-all">
          <img src="<?php bloginfo('template_directory'); ?>/images/all_content.png">
        </div>
      </div>
    </div>
  </section>

  <section class="contributors">
    <div class="contributors-container">
      <h1>Contributors</h1>
      <div class="topics">
        <div class="topic">
          <a href="#"><span class="t-overlay"><span><img src=""></a>
        </div>
      </div>
    </div>
  </section>

</div>

<?php get_footer(); ?>