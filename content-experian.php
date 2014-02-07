<div class="siteWrapper showcase">
  <section class="showcase-hero">
    <!--<img src="<?php bloginfo('template_directory'); ?>/images/work/experian/Experian-overlay-2@2x.png" alt="Experian Showcase" title="Experian Showcase">-->
    <div class="showcase-copy">
      <p>showcase</p>
      <h1>Experian</h1>
      <div class="partner-btn-container"><a target="_blank" class="partner-btn" href="http://experian.com">Explore</a></div>
    </div>
  </section>

  <section class="showcase-display">
    <div class="showcase-container">
      <h2>Experian Consumer Services</h2>
      <!--<h2 class="showcase-headline">Experian Consumer Services</h2>-->
      <ul class="showcase-items">
        <li class="all"><a href="#" class="selected"><span class="showcase-icon" aria-hidden="true" data-icon="s"></span>All</a></li>
        <li class="resource-articles"><a href="#"><span class="showcase-icon" aria-hidden="true" data-icon="g"></span>Resource Articles</a></li>
        <li class="blog"><a href="#"><span class="showcase-icon" aria-hidden="true" data-icon="r"></span>Blog</a></li>
        <li class="tips"><a href="#"><span class="showcase-icon" aria-hidden="true" data-icon="t"></span>Tips</a></li>
        <li class="infographics"><a href="#"><span class="showcase-icon" aria-hidden="true" data-icon="j"></span>Infographics</a></li>
        <li class="video"><a href="#"><span class="showcase-icon" aria-hidden="true" data-icon="d"></span>Video</a></li>
      </ul>
      <div class="content-showcase">
        <div class="showcase-all">
          <section class="all-showcase-section active">
            <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="collage of all content" title="all content" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/work/experian/ExperianMosaic.png">
          </section>

          <section class="resource-articles-showcase-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="text example" title="text example" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/work/experian/resources.jpg">
            </div>  
            <div class="showcase-info">
              <h2>Resource Articles</h2>
              <p>Build your content offerings with diverse formats, such as informational articles, blogs, recipes and more.</p>
            </div>
          </section> 

          <section class="blog-showcase-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="text example" title="text example" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/work/experian/blog.jpg">
            </div>  
            <div class="showcase-info">
              <h2>Blog</h2>
              <p>freecreditscore.com™ Blog: Credit Score VS. Credit Report - What's the Difference?</p>
            </div>
          </section>

          <section class="tips-showcase-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="text example" title="text example" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/work/experian/tips.jpg">
            </div>  
            <div class="showcase-info">
              <h2>Tips</h2>
              <p>Build your content offerings with diverse formats, such as informational articles, blogs, recipes and more.</p>
            </div>
          </section> 

          <section class="infographics-showcase-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="infographics example" title="infographics example" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/work/experian/infographic.jpg">
            </div>  
            <div class="showcase-info">
              <h2>Infographics</h2>
              <p>Educate your audiences with data visualization and awesome graphics.</p>
            </div>
          </section>

          <section class="video-showcase-section inactive">
            <div class="showcase-image">
              <iframe width="560" height="315" src="//www.youtube.com/embed/aoOQhelpDz4" frameborder="0" allowfullscreen></iframe>
            </div>  
            <div class="showcase-info">
              <h2>Video</h2>
              <p>Tell your story with customized videos.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  </section> <!-- end of our-content -->


  <section id="contact" class="contact">
    <div class="contact-container wrap">
      <div class="contact-info">
        <h2>Contact</h2>        
        <ul>
          <li><a href="http://goo.gl/rIf5Ud"><span aria-hidden="true" data-icon="k"></span>1655 26th Street Santa Monica, CA 90404</a></li> 
          <!-- <li><a href="tel:1-310-394-6400"><span aria-hidden="true" data-icon="a"></span>310 394 6400</a></li> -->
          <li><a href="mailto:contentsolutions@demandmedia.com"><span aria-hidden="true" data-icon="e"></span>contentsolutions@demandmedia.com</a></li> 
          <li><a href="http://demandmedia.com"><span aria-hidden="true" data-icon="i"></span>demandmedia.com</a></li> 
        </ul>
        <!--<div id="map-canvas" height="300"></div>-->
        <div class="map">
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=34.0296008,-118.46980680000001&zoom=15&size=380x250&markers=markers%3Dcolor%3Ared%7Clabel%3AD%7C%2034.0296008%2C-118.46980680000001&sensor=false&key=AIzaSyCfTw8JfNMW_6S-7gfOstaUtDEcX1QmSP4" alt="Demand Media">
        </div>
      </div>
      <div class="mail-info">
        <h2>Mail Us</h2> 
        <?php echo do_shortcode('[contact]'); ?>
      </div>
    </div>
  </section> <!-- end of contact -->

</div> <!-- end of siteWrapper -->