$(document).ready(function() {


  // FOR THE NAV STICKY
  $('.js--section-about').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'

  });

  // buttons to ids
  $(document).ready(function() {
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function() {
          window.location.hash = hash;
        });
      }
    });
  });

  // animations on scroll
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '70%'
  })
  $('.js--project-1').waypoint(function(direction) {
    $('.js--project-1').addClass('animate__animated animate__fadeInUp');
  }, {
    offset: '50%'
  })
  $('.js--project-2').waypoint(function(direction) {
    $('.js--project-2').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '75%'
  })

});
// mobile navigation
$('.js--nav-icon').click(function() {
  const nav = $('.js--main-nav');
  const icon = $('.js--nav-icon ion-icon');
  nav.slideToggle(200);

  // NAV PRODUCT BUTTONS

});