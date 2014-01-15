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
      <h1>Comprehensive <span class="highlight">Content</span></h1>
      <p>Providing partners with offerings to attract and engage intent-driven audiences.</p>
      <p class="sub-heading">Build your content foundation by leveraging our robust network of contributors.</p>
      <div class="contact-btn-container"><a class="contact-btn anchorLink" href="#contact">Get Started Today</a></div>
    </div>
    <!--<span class="hero-overlay"></span>-->
  </section>

  <section id="our-content" class="our-content">
    <div class="our-content-container">
      <h1>Our Content</h1>
      <ul class="content-items">
        <li class="all">
          <a href="#" class="selected">All</a>
          <!--<section class="all-section active">
            <img src="<?php bloginfo('template_directory'); ?>/images/content/all_content.png" alt="collage of all content" title="all content">
          </section>-->
        </li>
        <li class="animated-gif">
          <a href="#"><span aria-hidden="true" data-icon="c"></span>Animated Gif</a>
          <!--<section class="animated-gif-section inactive">
            <div class="showcase-image">
              <div class="gif-grid">
                <div class="col-1-2">
                  <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/Cut-Avocado.gif">
                </div>
                <div class="col-1-2">
                  <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/Remove-Seed.gif">
                </div>
              </div>
              <div class="gif-grid">
                <div class="col-1-2">
                  <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/ChalkboardPumpkin.gif">
                </div>
                <div class="col-1-2">
                  <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/DrilledPumpkin.gif">
                </div>
              </div>
            </div>  
            <div class="showcase-info inactive">
              <h2>Animated Gifs</h2>
              <p>Set your brand in motion with Animated GIFs.</p>
            </div>
          </section> -->
        </li>
        <li class="infographics">
          <a href="#"><span aria-hidden="true" data-icon="j"></span> Infographics</a>
          <!-- <section class="infographics-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/infographics-image.jpg" alt="infographics example" title="infographics example">
            </div>  
            <div class="showcase-info">
              <h2>Infographics</h2>
              <p>Educate your audiences with data visualization and awesome graphics.</p>
            </div>
          </section> -->
        </li>
        <li class="photography">
          <a href="#"><span aria-hidden="true" data-icon="b"></span>Photography</a>
          <!-- <section class="photography-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/photo_collage.jpg" alt="photography example" title="photography example">
            </div>  
            <div class="showcase-info">
              <h2>Photography</h2>
              <p>Increase your page views 5x with slide shows.</p>
            </div>
          </section> -->
        </li>
        <li class="quiz">
          <a href="#"><span aria-hidden="true" data-icon="f"></span>Quiz</a>
          <!--<section class="quiz-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/quiz-image.png" alt="quiz example" title="quiz example">
            </div>  
            <div class="showcase-info">
              <h2>Quiz</h2>
              <p>Get your community talking with quizzes, debates and polls.</p>
            </div>
          </section>-->
        </li>
        <li class="text">
          <a href="#"><span aria-hidden="true" data-icon="g"></span>Text</a>
           <!--<section class="text-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/text-image.png" alt="text example" title="text example">
            </div>  
            <div class="showcase-info">
              <h2>Text</h2>
              <p>Build your content foundation leveraging our robust network of contributors.</p>
            </div>
          </section> -->
        </li>
        <li class="video">
          <a href="#"><span aria-hidden="true" data-icon="d"></span>Video</a>
          <!-- <section class="video-section inactive">
            <div class="showcase-image">
             <video id="movie" width="600" height="400" preload="none" muted loop> 
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_3.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"/>
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_3.ogv"  type="video/ogg; codecs=theora,vorbis">
              </video>
            </div>  
            <div class="showcase-info">
              <h2>Video</h2>
              <p>Tell your story with customized videos.</p>
            </div>
          </section> -->
        </li>
      </ul>
      <div class="content-showcase">
        <div class="showcase-all">

          <section class="all-section active">
            <img src="<?php bloginfo('template_directory'); ?>/images/content/all_content.png" alt="collage of all content" title="all content">
          </section>

          <section class="animated-gif-section inactive">
            <div class="showcase-image">
              <!-- <img src="<?php bloginfo('template_directory'); ?>/images/content/clean_and_press_Jeremygif.gif" alt="animated example" title="animated example"> -->
              <div class="gif-grid">
                <div class="col-1-2">
                  <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/Cut-Avocado.gif">
                </div>
                <div class="col-1-2">
                  <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/Remove-Seed.gif">
                </div>
              </div>
              <div class="gif-grid">
                <div class="col-1-2">
                  <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/ChalkboardPumpkin.gif">
                </div>
                <div class="col-1-2">
                  <img src="<?php bloginfo('template_directory'); ?>/assets/gifs/DrilledPumpkin.gif">
                </div>
              </div>
            </div>  
            <div class="showcase-info inactive">
              <h2>Animated Gifs</h2>
              <p>Set your brand in motion with Animated GIFs.</p>
            </div>
          </section>

          <section class="infographics-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/infographics-image.jpg" alt="infographics example" title="infographics example">
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

          <section class="text-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/text-image.png" alt="text example" title="text example">
            </div>  
            <div class="showcase-info">
              <h2>Text</h2>
              <p>Build your content foundation leveraging our robust network of contributors.</p>
            </div>
          </section>

          <section class="video-section inactive">
            <div class="showcase-image">
              <video id="movie" width="600" height="400" preload="none" muted loop> 
                <!-- <source src="pr6.webm" type="video/webm; codecs=vp8,vorbis"> -->
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_3.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"/>
                <source src="<?php bloginfo('template_directory'); ?>/assets/videos/BYB_3.ogv"  type="video/ogg; codecs=theora,vorbis">
              </video>
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
      <h1>Our Network</h1>
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
          <p class="video-copy">more times is spent by viewers on pages with videos on them</p>
        </div>
      </div>
    </div> <!-- end of tips-container -->
  </section>

  <section id="about" class="about">
    <div class="about-container">
      <h1>About Us</h1>
      <p class="about-intro">Demand Media Content Solutions offers brands and publishers a new way to reach high-value, intent-driven audiences. We work with top talent and industry experts to create high quality, informative and engaging content in a myriad of formats, which are served directly to your site and can be optimized from our technology platform.</p>
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
          <li><a href="#"><span aria-hidden="true" data-icon="k"></span>1655 26th Street Santa Monica, CA 90404</a></li> 
          <li><a href="#"><span aria-hidden="true" data-icon="a"></span>310 394 6400</a></li> 
          <li><a href="#"><span aria-hidden="true" data-icon="e"></span>contentsolutions@demandmedia.com</a></li> 
          <li><a href="#"><span aria-hidden="true" data-icon="i"></span>demandmedia.com</a></li> 
        </ul>
        <div class="map">
          <img src="<?php bloginfo('template_directory'); ?>/images/map.png" alt="address" title="address">
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
    <h3>Community Offerings</h3>
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

<?php get_footer(); ?>