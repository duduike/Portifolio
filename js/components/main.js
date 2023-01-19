// menu

document.querySelector('.icon-menu').addEventListener('click', function(){
    document.querySelector('#menu').style.display = 'block';
    document.querySelector('.icon-menu').style.display = 'none';
    document.querySelector('.icon-close').style.display = 'block';
});

document.querySelector('.icon-close').addEventListener('click', function(){
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('.icon-menu').style.display = 'block';
    document.querySelector('.icon-close').style.display = 'none';
});

document.querySelector('.links').addEventListener('click', function(){
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('.icon-menu').style.display = 'block';
    document.querySelector('.icon-close').style.display = 'none';
});


// carousel

$(document).ready(function() {
    $('.carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows: false,
      dots: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          
        }
      }]
    });
  });
