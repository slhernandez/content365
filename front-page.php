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
    <!--<h1 class="hero-heading">Providing Partners Comprehensive <span class="highlight">Content</span> Offerings To Attract And Engage Intent Driven Audiences</h1>-->
    <div class="marketing">
      <h1>Let <span class="highlight">content</span> tell your story.</h1>
      <p>Compelling storytelling can help build stronger relationships. Our diverse Content Solutions offerings help partners create unique story lines for varying needs.</p>
      <!-- <p>Providing partners with offerings to attract and engage intent-driven audiences.</p> -->
      <p class="sub-heading">Start leveraging our robust team of expert contributors to attract and engage your audience with content for real life.</p> 
      <div class="action-items">
        <div class="contact-btn-container"><a class="contact-btn anchorLink" href="#contact">Tell Me More</a></div>
        <!--<div class="login-btn-container"><a target="_blank" class="login-btn" href="http://dm.dmpartnercontent.com">Already a member</a></div>-->
      </div>
    </div>
    <!--<span class="hero-overlay"></span>-->
  </section>

  <section id="our-content" class="our-content">
    <div class="our-content-container">
      <h1>Our Content</h1>
      <ul class="content-items">
        <li class="all"><a href="#" class="selected">All</a></li>
        <li class="text"><a href="#"><span aria-hidden="true" data-icon="g"></span>Text</a></li>
        <li class="video"><a href="#"><span aria-hidden="true" data-icon="d"></span>Video</a></li>
        <li class="animated-gif"><a href="#"><span aria-hidden="true" data-icon="c"></span>Animated Gif</a></li>
        <li class="infographics"><a href="#"><span aria-hidden="true" data-icon="j"></span> Infographics</a></li>
        <li class="photography"><a href="#"><span aria-hidden="true" data-icon="b"></span>Photography</a></li>
        <li class="quiz"><a href="#"><span aria-hidden="true" data-icon="f"></span>Quiz</a></li>
      </ul>
      <div class="content-showcase">
        <div class="showcase-all">

          <section class="all-section active">
            <img src="<?php bloginfo('template_directory'); ?>/images/content/all_content.png" alt="collage of all content" title="all content">
          </section>

          <section class="text-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/text-image2.png" alt="text example" title="text example">
            </div>  
            <div class="showcase-info">
              <h2>Text</h2>
              <p>Build your content offerings with diverse formats, such as informational articles, blogs, recipes and more.</p>
            </div>
          </section>

          <section class="video-section inactive">
            <div class="showcase-image">
              <video id="movie" width="600" height="400" preload="none" loop> 
                <!-- <source src="pr6.webm" type="video/webm; codecs=vp8,vorbis"> -->
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_3.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"/>
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_2.oggvorbis.ogg"  type="video/ogg; codecs=theora,vorbis">
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_3.oggtheora.ogv"  type="video/ogv; codecs=theora,vorbis">
              </video>
            </div>  
            <div class="showcase-info">
              <h2>Video</h2>
              <p>Tell your story with customized videos.</p>
            </div>
          </section>

          <section class="animated-gif-section inactive"></section> 

          <section class="infographics-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/infographics-image2.jpg" alt="infographics example" title="infographics example">
            </div>  
            <div class="showcase-info">
              <h2>Infographics</h2>
              <p>Educate your audiences with data visualization and awesome graphics.</p>
            </div>
          </section>

          <section class="photography-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/photo_collage.jpg" alt="photography example" title="photography example">
            </div>  
            <div class="showcase-info">
              <h2>Photography</h2>
              <p>Increase your page views 5x with slide shows.</p>
            </div>
          </section>

          <section class="quiz-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/quiz-image.png" alt="quiz example" title="quiz example">
            </div>  
            <div class="showcase-info">
              <h2>Quiz</h2>
              <p>Get your community talking with quizzes, debates and polls.</p>
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
        <h1>Solutions</h1>
        <div class="content">
          <h3>Unleash your content strategy using the Demand Media Platform to:</h3>
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
      <h1>Creative Community</h1>
      <div class="contributor-showcase">

        <div class="category-contributors inactive"></div>

        <div class="topics active">

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Arts & Crafts</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/crafts_380.jpg" alt="crafts" title="crafts">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Business & Finance</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/PersonalFinance_380.jpg" alt="Business & Finance" title="Business & Finance">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Education</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/education_380.jpg" alt="Education" title="Education">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Family & Relationships</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/relationships_380.jpg" alt="Family & Relationships" title="Family & Relationships">
            </a>
          </div>

          <div class="topic">
            
            <a href="#">
              <span class="t-overlay"><p class="t-label">Fitness & Well-being</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/fitness_380.jpg" alt="Fitness & Well-being" title="Fitness & Well-being">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Food</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/food_380.jpg" alt="food" title="food">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Garden</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/garden_380.jpg" alt="Garden" title="Garden">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Health</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/health_380.jpg" alt="health" title="health">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Home</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/HomeDIYDesign_380.jpg" alt="home" title="home"></a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Home Decor</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/decor_380.jpg" alt="Home Decor" title="Home Decor">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Legal</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/legal_380.jpg" alt="legal" title="legal">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Nutrition</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/nutrition_380.jpg" alt="nutrition" title="nutrition">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Parenting</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/family_380.jpg" alt="parenting" title="parenting">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Pets</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/Pets_380.jpg" alt="pets" title="pets">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Real Estate</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/RealEstate_380.jpg" alt="real estate" title ="real estate">
            </a>
          </div>
          
          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Style</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/fashion_380.jpg" alt="style" title="style">
            </a>
          </div>

           <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Technology</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/Tech_380.jpg" alt="tech" title="tech">
            </a>
          </div>

          <div class="topic">
            <a href="#">
              <span class="t-overlay"><p class="t-label">Travel</p></span>
              <img src="<?php bloginfo('template_directory'); ?>/images/contributors/updated/travel_380.jpg" alt="Travel" title="Travel">
            </a>
          </div>

        </div>

      </div>
    </div>
  </section> <!-- end of contributors -->

  <section id="insights" class="insights">
    <div class="insights-container">
      <h1>Insights</h1>
      <div class="insights-wrap">
        <div class="col1of3">
          <img src="<?php bloginfo('template_directory'); ?>/images/tips/mobile.png" alt="mobile" title="mobile">
          <div class="t-num">78%</div>
          <p>of consumers believe companies providing custom content are interested in building good relationships</p>
        </div>
        <div class="col1of3">
          <img src="<?php bloginfo('template_directory'); ?>/images/tips/picture.png" alt="picture" title="picture">
          <div class="t-num picture-num">44%</div>
          <p class="picture-copy">of people are more likely to engage with content on social media that contain pictures</p>
        </div>
        <div class="col1of3">
          <img src="<?php bloginfo('template_directory'); ?>/images/tips/video.png" alt="video" title="video">
          <div class="t-num video-num">2x</div>
          <p class="video-copy">the amount of more time spent by viewers on pages that have videos</p>
        </div>
      </div>
    </div> <!-- end of tips-container -->
  </section>

  <section id="about" class="about">
    <div class="about-container">
      <!--<div class="a-contact"><a href="#contact" class="anchorLink">Contact Us</a></div>-->
      <h1>About Us</h1>
      <div class="about-meta-container">
        <p class="about-intro">We create content for real life, because we deliver the right content, in the right format, right when people need it most. These formats range from step-by-step articles and knowledge-based videos to original photography, custom infographics, social tips, blogs and more.</p>
        <div class="a-contact"><a href="#contact" class="anchorLink">Contact Us</a></div>
      </div>
      <div class="about-grid">
        <div class="col-1-2">
          <div class="about-icon"><span aria-hidden="true" data-icon="p"></span></div>
          <h3>Insights</h3>
          <p>Everything starts by listening to the consumer through our billions of proprietary signals.  We create content based on a rich data set of queues from the internet audience.</p>
        </div>
        <div class="col-1-2">
          <div class="about-icon"><span aria-hidden="true" data-icon="o"></span></div>
          <h3>Studio Network</h3>
          <p>We have a network of thousands of highly qualified creators, talent and experts, who specialize in 22 niche categories, respectively.</p>
        </div>
      </div>
      <div class="about-grid">
        <div class="col-1-2">
          <div class="about-icon"><span aria-hidden="true" data-icon="n"></span></div>
          <h3>Content Formats</h3>
          <p>We have a myriad of evolving content formats such as how-to articles and knowledge-based videos to help people in their daily lives. We've optimized those formats for social and mobile platforms, and evolved our formats to include photography, infographics and blogs.</p>
        </div>
        <div class="col-1-2">
          <div class="about-icon"><span aria-hidden="true" data-icon="q"></span></div>
          <h3>Services</h3>
          <p>We have a seasoned publishing platform, inclusive of Demand Media's best-in-class SEO and social strategists.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="contact-container wrap">
      <div class="contact-info">
        <h1>Contact</h1>        
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
        <h1>Mail Us</h1> 
        <?php echo do_shortcode('[contact]'); ?>
      </div>
    </div>
  </section> <!-- end of contact -->

</div> <!-- end of siteWrapper -->

<script id="category-contributors" type="text/html">
  <a href="#" class="close-contributor-panel"><span aria-hidden="true" data-icon="m"></span></a> 
  <h1><%- info.category %></h1>
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
    <p>Set your brand in motion with Animated GIFs.</p>
  </div>
</script>

<?php get_footer(); ?>