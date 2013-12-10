jQuery(document).ready(function($) {
  console.log('loaded static-page.js...');

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
});