$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
      /* Slick JS End */

  });

  $('.car-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    /* Owl Carousel End */

$('.parallax-window').parallax({imageSrc: '/images/dishes-menu-section.jpg'});
/* Parralax JS End */

// init Isotope
var $grid = $('.item-details').isotope({
    // options
  });
  // filter items on button click
  $('.item-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  /* Isotope End */


  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
  /* Lightbox End */
 




        