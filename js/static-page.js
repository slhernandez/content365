jQuery(document).ready(function($) {
  console.log('loaded static-page.js...');

  $('.mobile-menu a').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    if ($('.navContent').hasClass('inactive')) {
      $('.navContent').addClass('active').removeClass('inactive');
    } else if ($('.navContent').hasClass('active')) {
      $('.navContent').addClass('inactive').removeClass('active');
    } else {
      $('.navContent').addClass('inactive');
    }
  });
});