$(document).ready(function() {
  if($('.js-slider').length) {
    $('.js-slider').slick({
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      mobileFirst: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendArrows: $('.slider-nav'),
      appendDots: $('.slider-nav')
    });
  }
});
