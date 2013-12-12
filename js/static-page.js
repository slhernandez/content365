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
      
      var destination = jQuery(elementClick).offset().top - 20;
      jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
      });
      return false;
    })
  });

}

jQuery(document).ready(function($) {

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
        $('.headerContent h1.logo img.white-logo').css('display', 'block');
        $('.headerContent h1.logo img.gray-logo').css('display', 'none');
        //$('.headerAndNavContainer.sticky').css('background', 'rgba(81, 87, 93, 0.7)');
      } else if (direction == 'up') {
        $('.headerAndNavContainer.sticky').css({
          background: 'rgba(255,255,255,1.0)',
          'box-shadow': 'none'
        });
        $('.headerContent h1.logo img').css('width', '100%');
        $('.headerContent h1.logo img.white-logo').css('display', 'none');
        $('.headerContent h1.logo img.gray-logo').css('display', 'block');
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
    if ($navContainer.hasClass('inactive')) {
      $navContainer.addClass('active').removeClass('inactive');
    } else if ($navContainer.hasClass('active')) {
      $navContainer.addClass('inactive').removeClass('active');
    } else {
      $navContainer.addClass('inactive');
    }
  });

  // Load backstretch image loader
  // ----------------------------------
  $('.hero-container').backstretch( [ 
    templateUrl + '/images/family2tablet1_opt.jpg'
    ,templateUrl + '/images/family1tablet2_opt.jpg'
    ,templateUrl + '/images/family3tablet2_opt.jpg'
  ], { duration: 3000, fade: 750 } );

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
    console.log('contentSection ...', contentSection);
    $('.showcase-all > section').removeClass('active').addClass('inactive');
    $('.content-items section').removeClass('active').addClass('inactive');

    $('.' + contentSection + '-section').removeClass('inactive').addClass('active');
  });

});