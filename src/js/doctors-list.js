var doctorsFiltered = false;

$(document).ready(function() {
  if($('.js-doctors-list').length) {
    $('.js-doctors-list').each(function(index) {
      $(this).slick({
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('#' + $(this).attr('data-buttons')),
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 579,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });
    });
  }
});

$('.js-doctors-filter').on('select2:select', function (e) {
  var filter = e.params.data.id;

  if(filter == 'all') {
    $('.js-doctors-list').slick('slickUnfilter');
    doctorsFiltered = false;
  } else {
    $('.js-doctors-list').slick('slickUnfilter').slick('slickFilter','[data-filter="'+filter+'"]');
    doctorsFiltered = true;
  }
});
