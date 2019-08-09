$(document).ready(function(){

  //Smooth scroll

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  //Inicialización de slider de servicios
  $('.slider-servicios').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('#que-hacemos .control-izquierda'),
    nextArrow: $('#que-hacemos .control-derecha'),
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1
        }
    }
    ],

  });

  //Inicialización de slider de colaboradores
  $('.slider-colaboradores').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
    }
    ],
  });

});
