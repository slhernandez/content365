window.solutionHeading = ["Listen", "Create", "Distribute", "Measure"];

window.solutionTgtMsg = ["To what content your audience wants", 
                      "Content written by experts that attract and engage your target audience", 
                      "Your content strategically to create search + social traffic", 
                      "Your content marketing ROI"]

window.solutionSecondaryMsg = ["Demand's proprietary algorithm analyzes millions of user-intent data to suggest titles optimized to perform on desktop and mobile.",
                            "Demand Media Studios employs network of contributors to create professional and engaging content in a myriad of innovative formats that captures your audience.",
                            "Demand Media's network of sites and digitally native talent allow our partners to reach new audiences.",
                            "Demand Media Analytics team monitors and tests core metrics to optimize content performance."]




jQuery.fn.anchorAnimate = function(settings) {

  settings = jQuery.extend({
    speed : 800 
  }, settings); 
  
  return this.each(function(){
    var caller = this
    jQuery(caller).click(function (event) {  
      event.preventDefault()
      var locationHref = window.location.href
      var elementClick = jQuery(caller).attr("href")
      
      var destination = jQuery(elementClick).offset().top - 0;
      jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
      });
      return false;
    })
  });

}

jQuery(document).ready(function($) {

  var _this = this;

  // Prepend an anchor tag for one-page scrolling.
  // This anchor tag is specifically for the hero image.
  $('body').prepend('<a name="top" id="hero"></a>');

  // Initiate scolling
  $('a.anchorLink').anchorAnimate();

  // Transform the header navigation while scrolling
  // ----------------------------------
  $('#our-content').waypoint( function(direction) {

      if (direction == 'down') {
        $('.headerAndNavContainer.sticky').css({
          background: 'rgba(255,255,255,0.7)', 
          background: 'rgba(81, 87, 93, 0.9)', 
          'box-shadow': '0 1px 1px rgba(0,0,0,0.2)'
        });
        $('.headerContent h1.logo img').css('width', '62%');
        $('.headerAndNavContainer').css('height', '65px');
        $('.headerContent h1.logo img.white-logo').css('display', 'none');
        $('.headerContent h1.logo img.gray-logo').css('display', 'block');
        //$('.headerAndNavContainer.sticky').css('background', 'rgba(81, 87, 93, 0.7)');
      } else if (direction == 'up') {
        $('.headerAndNavContainer.sticky').css({
          background: 'rgba(255,255,255,0.0)',
          'box-shadow': 'none'
        });
        $('.headerContent h1.logo img').css('width', '80%');
        $('.headerContent h1.logo img.white-logo').css('display', 'block');
        $('.headerContent h1.logo img.gray-logo').css('display', 'none');
        //$('.headerAndNavContainer.sticky').css('background', 'rgba(81, 87, 93, 1)');
      }

  });

  $('#contributors').waypoint( function(direction) {
      console.log('hey, you hit contributors... do something');
  });

  // Mobile menu
  // ----------------------------------
  $('.mobile-menu a').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var $navContainer = $('.navContent');
    $navContainer.slideToggle("fast");
    /*if ($navContainer.hasClass('inactive')) {
      $navContainer.addClass('active').removeClass('inactive');
    } else if ($navContainer.hasClass('active')) {
      $navContainer.addClass('inactive').removeClass('active');
    } else {
      $navContainer.addClass('inactive');
    }*/
  });

  // Load Backstretch image loader
  // ----------------------------------
  /*$('.hero-container').backstretch( [ 
    templateUrl + '/images/family2tablet1_opt.jpg'
    ,templateUrl + '/images/family1tablet2_opt.jpg'
    ,templateUrl + '/images/family3tablet2_opt.jpg'
  ], { duration: 3000, fade: 750 } );*/

  $('.hero-container').backstretch( [ 
    templateUrl + '/images/Content365_Family_1.jpg'
    ,templateUrl + '/images/Content365_Family_2.jpg'
    ,templateUrl + '/images/Content365_Family_3.jpg'
  ], { duration: 30000, fade: 750 } );


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
    console.log('screen ...', screen);
    $('.solutions-container').backstretch("show", screen);
    highlightPageNum($(this));
  });

  function highlightPageNum(numItem) {
    // change background color of li
    numItem.parent().find('li').each(function(item) {
      $(this).css('background', '#7ecd65');
      $(this).find('a').css('color', '#FFF');
    });
    numItem.css('background', '#FFF');
    numItem.find('a').css('color', '#7ecd65');
  }

  // WAYPOINT (scroll detection)
  // ----------------------------------
  var navHeading = $('.navHeading');
  var nav = $('.navContainer');
  
  navHeading.waypoint({
    handler: function(event, direction) {
      nav.toggleClass('sticky', direction=='down');
      if (direction == 'down') nav.css({ 'height':'auto' });
      else nav.css({ 'height':'auto' });
    },
    offset: 15
  });
  
  var sections = $("section[id]");    
  var navigation_links = $("nav a");
  
  function setActive(event, direction) {
    var active_section;
    active_section = $(this);
    if (direction === "up") active_section = active_section.prev();
    var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
    navigation_links.removeClass("active");
    active_link.addClass("active");
  }
  
  sections.waypoint({
    handler: setActive,
    offset: '35%'
  });
  
  // Content selection 
  // ----------------------------------

  $('.content-items li a').on('click', function(e) {
    e.preventDefault();

    $('.content-items li a').each(function() {
      $(this).removeClass('selected');
    });
    $(this).addClass('selected');
    var contentSection = $(this).parent().attr('class');
    $('.showcase-all > section').removeClass('active').addClass('inactive');
    $('.content-items section').removeClass('active').addClass('inactive');

    $('.' + contentSection + '-section').removeClass('inactive').addClass('active');
  });

  // Click event for contributor tiles.
  $('.topic').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var topic = $(this).find('p').text().replace(/\s+/g, '');
    console.log('topic is ...', topic);

  });

});

jQuery(window).on("backstretch.show", function (e, instance) { 
  var imageItem = instance.images[instance.index];
  if (instance.$container.attr('class') === 'solutions-container') {

    jQuery('.content').find('h2').animate({opacity:0}, 20, function() {
      jQuery(this).text(solutionHeading[instance.index]).animate({opacity:1});
    });

    jQuery('.content').find('.target-message').animate({opacity:0}, 20, function() {
      jQuery(this).text(solutionTgtMsg[instance.index]).animate({opacity:1});
    });

    jQuery('.content').find('.secondary-message').animate({opacity:0}, 20, function() {
      jQuery(this).text(solutionSecondaryMsg[instance.index]).animate({opacity:1});
    });

  }
});













