
$(document).ready(function () {

  // Add Class active when nav-item has been clicked
  $('.navbar-nav .nav-item').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
  });


  // Smooth Scroll To Div for navbar
  $('.navbar-nav .nav-item .nav-link').click(function () {
      $('html, body').animate({ scrollTop: $('#' + $(this).data('value')).offset().top}, 1500);
  });

  // Main Slider Carousel
$('.main-slider').owlCarousel({
  rtl: true,
  items:1,
  autoplay: true,
  autoplayTimeout:4000,
  smartSpeed: 800,
  dots:false,
  loop: true,
  nav: false,
});


// Trigger AOS Animations
AOS.init({
 once: true,
  disable: 'mobile',
duration: 1400
});


// clients Slider Carousel
  $('.owl-clients-slider').owlCarousel({
     rtl: true,
     autoplay:true,
     autoplayTimeout:4000,
     smartSpeed: 800,
     dots:false,
     loop: true,
     nav: true,
     responsive:{
           0:{
               items:1
           },
           400:{
               items:2
           },
           600:{
               items:3
           },
           800:{
               items:4
           },
           900:{
               items:5
           },

       }

   });


})
