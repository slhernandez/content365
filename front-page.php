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
    <div class="marketing marketing-vbackground">
      <h2><span class="highlight">Content</span> with a purpose</h2>
      <div class="action-items">
        <div class="play-btn-container video-thumb"><a class="play-btn"><span aria-hidden="true" data-icon="u"></span>Play Video</a></div>
        <div class="contact-btn-container"><a class="contact-btn anchorLink" href="#contact">Tell Me More</a></div>
      </div>
    </div>
    <div class="masthead-video-overlay"></div>
    <video id="feature-movie" autoplay="autoplay" loop="loop" poster="<?php bloginfo('template_directory'); ?>/assets/videos/reel_poster1.png" muted="muted"> 
      <!-- <source src="pr6.webm" type="video/webm; codecs=vp8,vorbis"> -->
      <source src="<?php bloginfo('template_directory'); ?>/assets/videos/roadshow_feature.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"/>
      <source src="<?php bloginfo('template_directory'); ?>/assets/videos/roadshow_feature.webmsd.webm" type="video/webm"/>
      <source src="<?php bloginfo('template_directory'); ?>/assets/videos/roadshow_feature.oggtheora.ogv"  type="video/ogv; codecs=theora,vorbis">
    </video>
  </section>

  <section id="our-content" class="our-content">
    <div class="our-content-container">
      <h2>Content</h2>
      <ul class="content-items">
        <li class="all"><a href="#" class="selected">All</a></li>
        <li class="text"><a href="#"><span aria-hidden="true" data-icon="C"></span>Text</a></li>
        <li class="video"><a href="#"><span aria-hidden="true" data-icon="y"></span>Video</a></li>
        <li class="animated-gif"><a href="#"><span aria-hidden="true" data-icon="G"></span>Animated Gif</a></li>
        <li class="infographics"><a href="#"><span aria-hidden="true" data-icon="z"></span> Infographics</a></li>
        <li class="photography"><a href="#"><span aria-hidden="true" data-icon="A"></span>Photography</a></li>
        <li class="quiz"><a href="#"><span aria-hidden="true" data-icon="B"></span>Quiz</a></li>
      </ul>
      <div class="content-showcase">
        <div class="showcase-all">

          <section class="all-section active">
            <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="collage of all content" title="all content" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/content/all_content.jpg">
          </section>

          <section class="text-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="text example" title="text example" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/content/text-grid-800-opt.jpg">
            </div>  
            <div class="showcase-info">
              <h2>Text</h2>
              <p>Develop your voice and engage new readers with informational articles, expert blogs, recipes, and more.</p>
            </div>
          </section>

          <section class="video-section inactive">
            <div class="showcase-image">
              <video id="movie" width="600" height="400" preload="none" loop> 
                <!-- <source src="pr6.webm" type="video/webm; codecs=vp8,vorbis"> -->
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_3.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"/>
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_3.webmsd.webm" type="video/webm"/>
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_3.oggtheora.ogv"  type="video/ogv; codecs=theora,vorbis">
              </video>
            </div>  
            <div class="showcase-info">
              <h2>Video</h2>
              <p>Captivate and entertain with the sight, sound, and motion of original video programming.</p>
            </div>
          </section>

          <section class="animated-gif-section inactive">
            <!-- Animated GIF section is located at the bottom of the page. Officially, it's a template. -->
          </section> 

          <section class="infographics-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="infographics example" title="infographics example" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/content/infographics-image2.jpg">
            </div>  
            <div class="showcase-info">
              <h2>Infographics</h2>
              <p>Data is beautiful and the visual web is here. Educate and enlighten your audience with fully-customized infographics.</p>
            </div>
          </section>

          <section class="photography-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="photography example" title="photography example" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/content/photo_collage.jpg">
            </div>  
            <div class="showcase-info">
              <h2>Photography</h2>
              <p>Bring your story to life with dazzling original photography.</p>
            </div>
          </section>

          <section class="quiz-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="quiz example" title="quiz example" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/content/quiz-image.png">
            </div>  
            <div class="showcase-info">
              <h2>Quiz</h2>
              <p>Get your community talking with quizzes, polls, and debates.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  </section> <!-- end of our-content -->

  <section id="solutions" class="solutions">
    <div class="solutions-container">
      <span class="solutions-overlay"></span>
      <div class="solutions-content">
        <h2>Solutions</h2>
        <div class="content">
          <h2></h2>
          <p class="target-message"></p>
          <p class="secondary-message"></p>
        </div>
        <ul class="pages">
         <li><a href="#" data-screen="0">1</a></li> 
         <li><a href="#" data-screen="1">2</a></li> 
         <li><a href="#" data-screen="2">3</a></li> 
         <li><a href="#" data-screen="3">4</a></li> 
        </ul>
        <ul class="sol-nav">
          <li class="next">
            <span aria-hidden="true" data-icon="l"></span>
          </li>
          <li class="prev">
            <span aria-hidden="true" data-icon="l"></span>
          </li>
        </ul>
      </div>
    </div>
  </section> <!-- end of solutions -->

  <section id="contributors" class="contributors">
    <div class="contributors-container">
      <h2>Creative Community</h2>
      <div class="contributor-showcase">

        <div class="category-contributors inactive"></div>

        <div class="topics active">

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Arts & Crafts</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="crafts" title="crafts" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/crafts_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Business & Finance</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="Business & Finance" title="Business & Finance" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/PersonalFinance_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Education</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="Education" title="Education" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/education_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Family & Relationships</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="Family & Relationships" title="Family & Relationships" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/relationships_380.jpg">
            </a>
          </div>

          <div class="topic">
            
            <a href="#">
              <span class="t-overlay"><p class="t-label">Fitness & Well-being</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="Fitness & Well-being" title="Fitness & Well-being" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/fitness_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Food</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="food" title="food" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/food_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Garden</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="Garden" title="Garden" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/garden_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Health</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="health" title="health" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/health_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Home</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="home" title="home" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/HomeDIYDesign_380.jpg"></a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Home Décor</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="Home Decor" title="Home Decor" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/decor_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Legal</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="legal" title="legal" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/legal_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Nutrition</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="nutrition" title="nutrition" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/nutrition_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Parenting</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="parenting" title="parenting" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/family_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Pets</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="pets" title="pets" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/Pets_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Real Estate</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="real estate" title ="real estate" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/RealEstate_380.jpg">
            </a>
          </div>
          
          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Style</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="style" title="style" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/fashion_380.jpg">
            </a>
          </div>

           <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Technology</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="tech" title="tech" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/Tech_380.jpg">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Travel</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="Travel" title="Travel" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/travel_380.jpg">
            </a>
          </div>

        </div>

      </div>
    </div>
  </section> <!-- end of contributors -->

  <section id="trending" class="insights">
    <div class="insights-container">
      <h2>Content Matters</h2>
      <div class="insights-wrap">
        <div class="col1of3">
          <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="mobile" title="mobile" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/tips/mobile.png">
          <div class="t-num">78%</div>
          <p>of consumers believe that organizations providing custom content are interested in building good relationships (TMG Custom Media, Dec 2013)</p>
        </div>
        <div class="col1of3">
          <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="picture" title="picture" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/tips/picture.png">
          <div class="t-num picture-num">44%</div>
          <p class="picture-copy">of people are more likely to engage with social media content that contains pictures (Performics, July 2012)</p>
        </div>
        <div class="col1of3">
          <img src="<?php bloginfo('template_directory'); ?>/images/blank.gif" alt="video" title="video" data-lazy-src="<?php bloginfo('template_directory'); ?>/images/tips/video.png">
          <div class="t-num video-num">2x</div>
          <p class="video-copy">additional time viewers spend on pages with video</p>
        </div>
      </div>
    </div> <!-- end of tips-container -->
  </section>

  <section id="about" class="about">
    <div class="about-container">
      <!--<div class="a-contact"><a href="#contact" class="anchorLink">Contact Us</a></div>-->
      <h2>About Us</h2>
      <div class="about-meta-container">
        <!--<p class="about-intro">We create content for real life, because we deliver the right content, in the right format, right when people need it most.</p>
        <div class="a-contact"><a href="#contact" class="anchorLink">Contact Us</a></div>-->
        <p class="about-intro">We create content for real life, because we deliver the right content, in the right format, right when people need it most. These formats range from step-by-step articles and knowledge-based videos to original photography, custom infographics, social tips, blogs and more.</p>
      </div>
      <div class="about-grid">
        <div class="col-1-2">
          <div class="about-icon"><span aria-hidden="true" data-icon="w"></span></div>
          <h3>Data</h3>
          <p>Everything starts by listening to the consumer through our billions of proprietary signals.  We create content based on a rich data set of queues from the internet audience.</p>
        </div>
        <div class="col-1-2">
          <div class="about-icon network-icon"><span aria-hidden="true" data-icon="F"></span></div>
          <h3>Creators</h3>
          <p>We have a network of thousands of highly qualified creators, talent and experts, who specialize in 22 niche categories, respectively.</p>
        </div>
      </div>
      <div class="about-grid">
        <div class="col-1-2">
          <div class="about-icon"><span aria-hidden="true" data-icon="v"></span></div>
          <h3>Formats</h3>
          <p>We have a myriad of evolving content formats such as how-to articles and knowledge-based videos to help people in their daily lives. We've optimized those formats for social and mobile platforms, and evolved our formats to include photography, infographics and blogs.</p>
        </div>
        <div class="col-1-2">
          <div class="about-icon"><span aria-hidden="true" data-icon="E"></span></div>
          <h3>Services</h3>
          <p>We have a seasoned publishing platform, inclusive of Demand Media's best-in-class SEO and social strategists.</p>
        </div>
      </div>
    </div>
  </section>

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
<div class="trailer">
  <div class="video-close"><span aria-hidden="true" data-icon="m"></span></div>
  <div class="video-container">
    <iframe id="videoIframe" src="//player.vimeo.com/video/88025704?title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <p>Content Solutions</p>
  </div>
</div>

<script id="category-contributors" type="text/html">
  <a href="#" class="close-contributor-panel"><span aria-hidden="true" data-icon="m"></span></a> 
  <h2><%- info.category %></h2>
  <div class="contributor-meta">
    <h3>Expert Contributors</h3>
    <% _.each(info.meta, function(item) { %>
      <p><%= item %></p>
    <% }); %>
  </div>
  <div class="contributor-bios">
    <% _.each(info.bios, function(item) { %> 
      <div class="col1of3">
        <img src="<?php bloginfo('template_directory'); ?>/images/contributors/bios/<%= item['img'] %>">
        <p class="bio">
          <span class="bio-name"><%= item['name'] %></span>
          <%= item['bio'] %>
        </p>
      </div>
    <% }); %>
  </div>
</script>

<script id="animated-gif-template" type="text/html">
  <div class="showcase-image">
    <div class="gif-grid">
      <div class="col-1-2">
        <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/PistolSquat_Jeremy.gif">
      </div>
      <div class="col-1-2">
        <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/Cut-Avocado.gif">
      </div>
    </div>
    <div class="gif-grid">
      <div class="col-1-2">
        <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/ChalkboardPumpkin.gif">
      </div>
      <div class="col-1-2">
        <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/nails.gif">
      </div>
    </div>
  </div>  
  <div class="showcase-info inactive">
    <h2>Animated Gifs</h2>
    <p>Spring your social story into action with instantly shareable animated GIFs.</p>
  </div>
</script>

<?php get_footer(); ?>