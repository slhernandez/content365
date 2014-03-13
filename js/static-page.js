jQuery(document).ready(function($) {

  // Some users like to use Toolbars (i.e. Yahoo! Toolbar, Google Toolbar, etc...)
  // These toolbars like to inject themselves into websites. Just on top of the body of the document.
  // We have to adjust our scrolling offset for these toolbars.  So, we need a function
  // that determines the margin-top value of body
  function calculateBodyMarginTop() {
    var margintop =  $('body').css('margin-top');
    // Just strip out only numbers from margin-top value (i.e. 33px)
    var extractnum = margintop.match(/\d+/);
    // Convert string to number
    return parseInt(extractnum);
  }

  // calculate margintop only once
  var body_margin_top = calculateBodyMarginTop();

  // Simple way to control one-page scrolling.
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        if (body_margin_top > 0) {
          // Always take into account body_margin_top (i.e. there may be a Yahoo! toolbar present)
          $('html,body').animate({ scrollTop: target.offset().top - body_margin_top }, 800);
        } else {
          $('html,body').animate({ scrollTop: target.offset().top }, 800);
        }
        return false;
      }
    }
  });

  // Save context of this for callbacks
  var _this = this;

  // Check if the page that is loaded is a separate static page (i.e. showcase)
  if (isPage()) {
    $('.headerAndNavContainer.sticky').css({ position: 'absolute' });
  }

  if (isWorkPage()) {
    $('.headerAndNavContainer').css('background', '#51575D');
  }

  if (isErrorPage()) {
    $('.headerAndNavContainer.sticky').css({ 
      position: 'static',
      background: '#51575D'
    });
  }

  // Prepend an anchor tag for one-page scrolling.
  // This anchor tag is specifically for the hero image.
  $('body').prepend('<a name="top" id="hero"></a>');

  // Transform the header navigation while scrolling
  // ----------------------------------
  $('#our-content').waypoint( function(direction) {
    if (direction == 'down') {
      $('.headerAndNavContainer.sticky').css({
        background: '#51575D', 
        background: 'rgba(81, 87, 93, 0.9)', 
        'box-shadow': '0 1px 1px rgba(0,0,0,0.2)'
      });
    } else if (direction == 'up') {
      $('.headerAndNavContainer.sticky').css({
        background: 'rgba(255,255,255,0.0)',
        'box-shadow': 'none'
      });
    }
  });

  // Display an opaque background for the nav menu when 
  // scrolling down. Remove it when scrolling up.
  /*$('.marketing h2').waypoint( function(direction) {
    if (direction == 'down') {
      $('.headerAndNavContainer').css('background', 'rgba(81, 87, 93, 0.7)');
    } else if (direction === 'up') {
      $('.headerAndNavContainer').css('background', 'rgba(81, 87, 93, 0.0)');
    }
  });*/

  // Mobile menu
  // ----------------------------------
  var $navContainer = $('.navContent');
  $('.mobile-menu a').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $navContainer.slideToggle("fast");
  });

  // When you resize the browser, the menu will remain hidden. 
  // Make sure to remove the hidden style when resized to desktop mode.
  var resizeTimer; // Set resizeTimer to empty so it resets on page load
  
  function resizeFunction() {
    var w = $(window).width();
    if (w > 320 && $navContainer.is(':hidden')) {
      $navContainer.removeAttr('style');
    } 
  } 

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds. 
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeFunction, 250);
  });

  var hero_images = [ templateUrl + '/images/Content365_Family_1_opt.jpg',
                     templateUrl + '/images/Content365_Family_2_opt.jpg',
                     templateUrl + '/images/Content365_Family_3_opt.jpg' ];

  var $heroContainer = $('.hero-container');
  //$heroContainer.backstretch( hero_images, { "duration": "10000", "fade": "750" });

  // If website is loaded on a mobile browser, turn off the autoplay video.
  // Replace the autoplay video with backstretch hero image slider.
  if ( window.mobilecheck() ) {
    //console.log('we are loaded on a mobile browser');
    $('#feature-movie').remove();
    $('.masthead-video-overlay').remove();
    $heroContainer.backstretch( hero_images, { "duration": "10000", "fade": "750" });
    $('.marketing').css('padding', '365px 0 50px 0');
    $('.marketing').css('position', 'relative');
  } 

  // -------------------------------------
  // Solutions Section - Slideshow w/ next/prev
  // -------------------------------------
  var solution_images = [ templateUrl + '/images/solution/Listen.jpg',
                          templateUrl + '/images/solution/Create.jpg',
                          templateUrl + '/images/solution/Distribute.jpg',
                          templateUrl + '/images/solution/Measure.jpg' ];

  var $solutionsContainer = $('.solutions-container');
  $solutionsContainer.backstretch( solution_images);
  $solutionsContainer.backstretch("pause");

  // Setup next and previous links for solution slideshow
  $('.next').on('click', function(e) {
    e.preventDefault();
    $('.solutions-container').data('backstretch').next();
    var currentSlide = $('.solutions-container').data("backstretch").index;
    var $numItem = $('.pages li')[currentSlide];
    highlightPageNum($($numItem));
  });

  $('.prev').on('click', function(e) {
    e.preventDefault();
    $('.solutions-container').data('backstretch').prev(); 
    var currentSlide = $('.solutions-container').data("backstretch").index;
    var $numItem = $('.pages li')[currentSlide];
    highlightPageNum($($numItem));
  });

  // Setup click events for page links
  $('.pages li').on('click', function(e) {
    e.preventDefault();
    var screen = $(this).find('a').data('screen');
    $('.solutions-container').backstretch("show", screen);
    highlightPageNum($(this));
  });

  function highlightPageNum(numItem) {
    // change background color of li
    numItem.parent().find('li').each(function(item) {
      $(this).css('background', 'transparent');
    });
    numItem.css('background', '#555');
  }

  /** 
   * WAYPOINT (scroll detection) 
   *
   */
  var navHeading = $('.navHeading');
  var nav = $('.navContainer');
  
  navHeading.waypoint({
    handler: function(direction) {
      nav.toggleClass('sticky', direction=='down');
      if (direction == 'down') {
        nav.css({ 'height':'auto' }); 
      } else { 
        nav.css({ 'height':'auto' });
      }
    },
    offset: 15 
  });

  var sections = $("section[id]");    
  var navigation_links = $("nav a");
  
  function setActive(direction) {
    var active_section = $(this);
    if (direction === "up") {
      active_section = active_section.prev();
    }
    var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
    navigation_links.removeClass("active");
    active_link.addClass("active");
  }
  
  sections.waypoint({
    handler: setActive,
    offset: '10%'
  });
  
  /** 
   * CONTENT SELECTION - Our Content Section
   * Click handler for navigation menu located in the "Our Content" section.
   *
   */
  $('.content-items li a').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.content-showcase').find('video')[0].pause();

    $('.content-items li a').each(function() {
      $(this).removeClass('selected');
    });

    $(this).addClass('selected');
    var contentSection = $(this).parent().attr('class');
    $('.showcase-all > section').removeClass('active').addClass('inactive');
    $('.content-items section').removeClass('active').addClass('inactive');

    $('.' + contentSection + '-section').removeClass('inactive').addClass('active');

    // Check if video link has been selected. We want to play the video right away.
    if ($(this).text() === 'Video') {
      $('.content-showcase').find('video')[0].play();
    }
  });

  /** 
   * CREATIVE COMMUNITY  
   * Click event for contributor tiles.
   *
   */
  $('.topic').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    // Strip out any white space in the title
    var topic = $(this).find('p').text().replace(/\s+/g, '');
    var $categoryContributors = $('.category-contributors');

    // Make sure that category contributors is alway empty/removed
    $categoryContributors.empty();

    // Load template for category contributors
    $categoryContributors.append(_.template($('#category-contributors').html(), { info: CONFIG.contributorInfo[topic] }));

    // Display category contributors
    $categoryContributors.removeClass('inactive').addClass('active');

    // Hide category grid
    $(this).closest('.topics').removeClass('active').addClass('inactive');

    // Scroll top to section container
    $categoryContributors.scrollTop = 0;

    var $body = $('html, body');

    var $community = $("#contributors");

    $body.animate({ scrollTop: $community.offset().top }, 800);

  });

  // Click event for closing category contributor
  $('#contributors').on('click', '.close-contributor-panel', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).closest('.category-contributors').removeClass('active').addClass('inactive')
    $('.topics').removeClass('inactive').addClass('active');
  });

  // Anitmated GIF click event located in the Our Content section.
  $('.animated-gif a').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    // Inject animated-gif template and load gifs.
    $('.animated-gif-section').empty();
    $('.animated-gif-section').append(_.template($('#animated-gif-template').html()));
  });

  // On-click event for showcase navigation (i.e. experian page)
  $('.showcase-items li a').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.showcase-items li a').each(function() {
      $(this).removeClass('selected');
    });

    $(this).addClass('selected');
    var contentSection = $(this).parent().attr('class');
    console.log('contentSection ... ', contentSection);
    $('.showcase-all > section').removeClass('active').addClass('inactive');

    $('.' + contentSection + '-showcase-section').removeClass('inactive').addClass('active');
    return;
  });

  // check if body tag has class attribute named page
  function isPage() {
    return $('body').hasClass('page');
  }

  // check if the error page is loaded.
  function isErrorPage() {
    return $('body').hasClass('error404');
  }

  // check if the work page is loaded.
  function isWorkPage() {
    return $('.siteWrapper').hasClass('work');
  }

  /** 
   * SOLUTION SECTION - SLIDESHOW
   *
   */
  $('#solutions').on("backstretch.show", function (e, instance) { 
    var imageitem = instance.images[instance.index];
    if (instance.$container.attr('class') === 'solutions-container') {
      $('.content').find('h2').animate({opacity:0}, 20, function() {
        $(this).text(CONFIG.solutionCopy['solutionHeading'][instance.index]).animate({opacity:1});
      });

      $('.content').find('.target-message').animate({opacity:0}, 20, function() {
        $(this).text(CONFIG.solutionCopy['solutionTgtMsg'][instance.index]).animate({opacity:1});
      });

      $('.content').find('.secondary-message').animate({opacity:0}, 20, function() {
        $(this).text(CONFIG.solutionCopy['solutionSecondaryMsg'][instance.index]).animate({opacity:1});
      });
    }
  });

  /** 
   * EXPERIAN STATIC PAGE: Should be used in future showcase (customer) pages.
   *
   * Click events for navigation.  Clicking on nav links should redirect 
   * the user back to the homepage and scroll to the correct anchor.
   */
  function redirectHome(location) {
    var urlRedirect = window.location.origin; 
    urlRedirect = urlRedirect + location;
    window.location.href = urlRedirect;
  }  

  $('#page .navContent li').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    // Re-direct to homepage
    redirectHome($(this).find('a').attr('href'));
  });

  $('#page .logo a').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var href = $(this).attr('href');
    redirectHome($(this).attr('href'));
  });

  /** 
   * VIDEO: Click events.
   *
   * Loads/closes the modal window to display the Content Solutions reel.
   * fitVids is used for responsiveness.
   */
  $('.video-thumb').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.trailer').toggleClass('show').fitVids();
  });

  $('.trailer').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.trailer').toggleClass('show').fitVids();
    // sets the source to nothing, stopping the video
    $('#videoIframe').attr('src', '');

    // sets it back to the correct link so that it reloads immediately on the next window display.
    $('#videoIframe').attr('src', '//player.vimeo.com/video/88025704?title=0&amp;byline=0&amp;portrait=0');
  });

  $('.video-close').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.trailer').removeClass('show');
    // sets the source to nothing, stopping the video
    $('#videoIframe').attr('src', '');

    // sets it back to the correct link so that it reloads immediately on the next window display.
    $('#videoIframe').attr('src', '//player.vimeo.com/video/88025704?title=0&amp;byline=0&amp;portrait=0');
  });

});

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|android|ipad|playbook|silk|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check; 
}




