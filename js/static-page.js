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
  $('.marketing h2').waypoint( function(direction) {
      if (direction == 'down') {
        $('.headerAndNavContainer').css('background', 'rgba(81, 87, 93, 0.7)');
      } else if (direction === 'up') {
        $('.headerAndNavContainer').css('background', 'rgba(81, 87, 93, 0.0)');
      }
  });

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

  // WAYPOINT (scroll detection)
  // ----------------------------------
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
  
  // Content selection 
  // ----------------------------------

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

  // Click event for contributor tiles.
  $('.topic').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    // Strip out any white space in the title
    var topic = $(this).find('p').text().replace(/\s+/g, '');

    // Make sure that category contributors is alway empty/removed
    $('.category-contributors').empty();

    // Load template for category contributors
    $('.category-contributors').append(_.template($('#category-contributors').html(), { info: CONFIG.contributorInfo[topic] }));

    // Display category contributors
    $('.category-contributors').removeClass('inactive').addClass('active');
    // Hide category grid
    $(this).closest('.topics').removeClass('active').addClass('inactive');
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

  // Check if body tag has class attribute named page
  function isPage() {
    return $('body').hasClass('page');
  }

  function isErrorPage() {
    return $('body').hasClass('error404');
  }

  // This handles the slideshow for the solution section
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

  function redirectHome(location) {
    var urlRedirect = window.location.origin; 
    urlRedirect = urlRedirect + location;
    //console.log('urlRedirect ... ', urlRedirect);
    window.location.href = urlRedirect;
  }

  // Navigation click events for static pages (i.e. experian)
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

  // Video thumbnail click event
  $('.video-thumb').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.trailer').toggleClass('show').fitVids();
  });

  $('.trailer').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.trailer').toggleClass('show').fitVids();
  });



  // Assign FitVids.js to trailer/view for responsiveness
  //$('.video-container').fitVids();

  $('.video-close').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.trailer').removeClass('show');
  });

});



