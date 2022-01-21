$(document).ready(function() {
  if($('.js-simple-slider').length) {
    $('.js-simple-slider').slick({
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
});
