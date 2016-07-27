$(document).on('ready', function() {
  console.log('GO TEAM - Header');

  $('.dropdown-toggle').on('click', function() {
    $('.dropdown-menu').toggleClass('block');
    $('header .genericon').toggleClass('genericon-uparrow');
  });


});
