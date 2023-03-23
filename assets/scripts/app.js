// CAROUSEL
$(document).ready(function() {
    $('.carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows: true,
      dots: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          arrows: true,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 747,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1
          
        }
      }]
    });
  });

