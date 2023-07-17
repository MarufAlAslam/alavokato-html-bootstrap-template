// slick
$(".expertise-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  arrows: true,
  prevArrow:
    '<button class="btn prev"><img src="img/prev.png" class="img-fluid" alt=""></button>',
  nextArrow:
    '<button class="btn next"><img src="img/next.png" class="img-fluid" alt=""></button>',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
