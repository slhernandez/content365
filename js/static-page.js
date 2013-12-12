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

  $('#our-content').waypoint( function(direction) {

      if (direction == 'down') {
        $('.headerAndNavContainer.sticky').css({
          background: 'rgba(255,255,255,0.7)', 
          'box-shadow': '0 1px 1px rgba(0,0,0,0.2)'
        });
        //$('.headerAndNavContainer.sticky').css('background', 'rgba(81, 87, 93, 0.7)');
        //$('.navContent a').css('color', '#FFF');
      } else if (direction == 'up') {
        $('.headerAndNavContainer.sticky').css({
          background: 'rgba(255,255,255,1.0)',
          'box-shadow': 'none'
        });
        //$('.navContent a').css('color', 'rgba(81, 87, 93, 1)');
        //$('.headerAndNavContainer.sticky').css('background', 'rgba(81, 87, 93, 1)');
      }

  });

  // Mobile menu
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
  $('.hero-container').backstretch( [ 
    templateUrl + '/images/family2tablet1_opt.jpg'
    ,templateUrl + '/images/family1tablet2_opt.jpg'
    ,templateUrl + '/images/family3tablet2_opt.jpg'
  ], { duration: 3000, fade: 750 } );

  // WAYPOINT (scroll detection)
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
  
});