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
      <p>Providing Partners with offerings to attract and engage intent driven audience</p>
      <div class="contact-btn-container"><a class="contact-btn" href="#">Get Started Today</a></div>
    </div>
    <!--<span class="hero-overlay"></span>-->
  </section>

  <section id="our-content" class="our-content">
    <div class="our-content-container">
      <h1>Our Content</h1>
      <ul class="content-items">
        <li class="all">
          <a href="#" class="selected">All</a>
          <section class="all-section active">
            <img src="<?php bloginfo('template_directory'); ?>/images/content/all_content.png" alt="collage of all content" title="all content">
          </section>
        </li>
        <li class="animated-gif">
          <a href="#"><span aria-hidden="true" data-air-icon="&#xE8B0;"></span>Animated Gif</a>
          <section class="animated-gif-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/madewell_g.gif" alt="animated example" title="animated example">
            </div>  
            <div class="showcase-info inactive">
              <h2>Animated Gifs</h2>
              <p>Set your brand in motion with Animated GIFs.</p>
            </div>
          </section>
        </li>
        <li class="infographics">
          <a href="#"><span aria-hidden="true" data-air-icon="&#xF601;"></span> Infographics</a>
          <section class="infographics-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/infographics-image.png" alt="infographics example" title="infographics example">
            </div>  
            <div class="showcase-info">
              <h2>Infographics</h2>
              <p>Educate your audiences with data visualization and awesome graphics.</p>
            </div>
          </section> 
        </li>
        <li class="photography">
          <a href="#"><span aria-hidden="true" data-air-icon="&#x1F4F7;"></span>Photography</a>
          <section class="photography-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/photography-image.png" alt="photography example" title="photography example">
            </div>  
            <div class="showcase-info">
              <h2>Photography</h2>
              <p>Increase your page views 5x with slide shows.</p>
            </div>
          </section>
        </li>
        <li class="quiz">
          <a href="#"><span aria-hidden="true" data-air-icon="&#xE399;"></span>Quiz</a>
          <section class="quiz-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/quiz-image.png" alt="quiz example" title="quiz example">
            </div>  
            <div class="showcase-info">
              <h2>Quiz</h2>
              <p>Get your community talking with quizzes, debates and polls.</p>
            </div>
          </section>
        </li>
        <li class="text">
          <a href="#"><span aria-hidden="true" data-air-icon="&#xEC00;"></span>Text</a>
           <section class="text-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/text-image.png" alt="text example" title="text example">
            </div>  
            <div class="showcase-info">
              <h2>Text</h2>
              <p>Build your content foundation leveraging our robust network of contributors.</p>
            </div>
          </section>
        </li>
        <li class="video">
          <a href="#"><span aria-hidden="true" data-air-icon="&#x1F4F9;"></span>Video</a>
          <section class="video-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/video-image.png" alt="video example" title="video example">
            </div>  
            <div class="showcase-info">
              <h2>Video</h2>
              <p>Tell your story with customized videos.</p>
            </div>
          </section>
        </li>
      </ul>
      <div class="content-showcase">
        <div class="showcase-all">

          <section class="all-section active">
            <img src="<?php bloginfo('template_directory'); ?>/images/content/all_content.png" alt="collage of all content" title="all content">
          </section>

          <section class="animated-gif-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/madewell_g.gif" alt="animated example" title="animated example">
            </div>  
            <div class="showcase-info inactive">
              <h2>Animated Gifs</h2>
              <p>Set your brand in motion with Animated GIFs.</p>
            </div>
          </section>

          <section class="infographics-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/infographics-image.png" alt="infographics example" title="infographics example">
            </div>  
            <div class="showcase-info">
              <h2>Infographics</h2>
              <p>Educate your audiences with data visualization and awesome graphics.</p>
            </div>
          </section>

          <section class="photography-section inactive">
            <div class="showcase-image">
              <img src="<?php bloginfo('template_directory'); ?>/images/content/photography-image.png" alt="photography example" title="photography example">
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
              <img src="<?php bloginfo('template_directory'); ?>/images/content/video-image.png" alt="video example" title="video example">
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
          <h3>Unleash your content strategy using demand media's platform to:</h3>
          <h2>Create</h2>
          <p class="target-message">Content written by experts that attract and engage your target audience.</p>
          <p class="secondary-message">Demand Media Studios employs network of contributors to create professional and engaging content in a myriad of innovative formats that captures your audience.</p>
          <ul class="pages">
           <li><a href="#">1</a></li> 
           <li><a href="#">2</a></li> 
           <li><a href="#">3</a></li> 
           <li><a href="#">4</a></li> 
          </ul>
        </div>
        <ul class="sol-nav">
          <li class="next">
            <span aria-hidden="true" data-air-icon="&#x25BB;"></span>
            <span class="screen-reader-text">Previous</span>
          </li>
          <li class="prev">
            <span aria-hidden="true" data-air-icon="&#x25C5;"></span>
            <span class="screen-reader-text">Previous</span>
          </li>
        </ul>
      </div>
    </div>
  </section> <!-- end of solutions -->

  <section id="contributors" class="contributors">
    <div class="contributors-container">
      <h1>Contributors</h1>
      <div class="topics">
        <div class="topic">
          <p class="t-label">Pets</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/pets.jpg" alt="pets" title="pets"></a>
        </div>
        <div class="topic">
          <p class="t-label">Real Estate</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/real-estate.jpg" alt="real estate" title ="real estate"></a>
        </div>
        <div class="topic">
          <p class="t-label">Personal Finance</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/personal-finance.jpg" alt="finance" title="finance"></a>
        </div>
        <div class="topic">
          <p class="t-label">Crafts</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/crafts.jpg" alt="crafts" title="crafts"></a>
        </div>
        <div class="topic">
          <p class="t-label">Parenting/Family</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/parenting-family.jpg" alt="parenting and family" title="parenting and family"></a>
        </div>
        <div class="topic">
          <p class="t-label">Home DIY & Design</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/home-diy-design.jpg" alt="home and design" title="home and design"></a>
        </div>
        <div class="topic">
          <p class="t-label">Make Up/Hair</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/makeup.jpg" alt="make up and hair" title="make up and hair"></a>
        </div>
        <div class="topic">
          <p class="t-label">Fashion</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/fashion.jpg" alt="fashion" title="fashion"></a>
        </div>
        <div class="topic">
          <p class="t-label">Food</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/food.jpg" alt="food" title="food"></a>
        </div>
        <div class="topic">
          <p class="t-label">Nutrition</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/nutrition.jpg" alt="nutrition" title="nutrition"></a>
        </div>
        <div class="topic">
          <p class="t-label">Legal</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/legal.jpg" alt="legal" title="legal"></a>
        </div>
        <div class="topic">
          <p class="t-label">Health</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/health.jpg" alt="health" title="health"></a>
        </div>
        <div class="topic">
          <p class="t-label">Fitness</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/fitness.jpg" alt="topic" title="topic"></a>
        </div>
        <div class="topic">
          <p class="t-label">Tech</p>
          <a href="#"><span class="t-overlay"></span><img src="<?php bloginfo('template_directory'); ?>/images/contributors/tech.jpg" alt="tech" title="tech"></a>
        </div>
      </div>
    </div>
  </section> <!-- end of contributors -->

  <section id="tipsandtricks" class="tipsandtricks">
    <div class="tips-container">
      <h1>Tips and Tricks</h1>
      <div class="tipswrap">
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

  <section id="contact" class="contact">
    <div class="contact-container wrap">
      <div class="contact-info">
        <h1>Contact</h1>        
        <ul>
          <li><a href="#"><span aria-hidden="true" data-air-icon="&#x1F4D1;"></span>1655 26th Street Santa Monica, CA 90404</a></li> 
          <li><a href="#"><span aria-hidden="true" data-air-icon="&#x1F4DE;"></span>310 394 6400</a></li> 
          <li><a href="#"><span aria-hidden="true" data-air-icon="&#xE350;"></span>content365@demandmedia.com</a></li> 
          <li><a href="#"><span aria-hidden="true" data-air-icon="&#x1F310;"></span>demandmedia.com</a></li> 
        </ul>
        <div class="map">
          <img src="<?php bloginfo('template_directory'); ?>/images/map.png" alt="address" title="address">
        </div>
      </div>
      <div class="mail-info">
        <h1>Mail Us</h1>        
        <form>
          <fieldset>
            <label for="name">Your Name</label>
            <input type="text" id="name" class="form-text" placeholder="Enter your name"/>
          </fieldset>
          <fieldset>
            <label for="email">Email Address</label>
            <input type="email" id="email" class="form-text" placeholder="Enter your email"/>
          </fieldset>
          <fieldset>
            <label for="subject">Subject</label>
            <input type="text" id="subject" class="form-text" placeholder="Subject"/>
          </fieldset>
          <fieldset>
            <label for="message">Message</label>
            <textarea id="message" placeholder="Message"></textarea>
          </fieldset>
          <fieldset class="form-actions send">
            <input type="submit" class="send-btn"  value="SEND" />
          </fieldset>
          <fieldset class="form-actions reset">
            <input type="submit" class="reset-btn" value="RESET" />
          </fieldset>
        </form>
      </div>
    </div>
  </section> <!-- end of contact -->

</div>

<?php get_footer(); ?>