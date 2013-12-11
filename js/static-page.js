jQuery(document).ready(function($) {

  console.log('loaded static-page.js...');

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

  console.log('templateUrl ... ', templateUrl);
  // Load backstretch image loader
  $('.hero-container').backstretch( [ 
    templateUrl + '/images/family2tablet1_opt.jpg'
    ,templateUrl + '/images/family1tablet2_opt.jpg'
    ,templateUrl + '/images/family3tablet2_opt.jpg'
    ], { duration: 3000, fade: 750 } );
});