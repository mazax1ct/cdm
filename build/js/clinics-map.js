var mapShowed = false;

var ymapsInserted = false;

var clinics_map;

function mapInit(elem) {
  clinics_map = new ymaps.Map(elem, {
    center: [59.941707, 30.301902],
    zoom: 10
  }, {
    searchControlProvider: 'yandex#search'
  });

  clinics_map.behaviors.disable('scrollZoom');

  var i, placemark;

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    clinics_map.behaviors.disable('drag');
    clinics_map.behaviors.enable('MultiTouch');
  }
}

window.onload = () => {
  //цель наблюдения
  let target = document.getElementById('clinics_map');

  if(target) {
    // настройки
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    }

    // функция обратного вызова
    let callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting > 0) {
          if(mapShowed != true) {
            var elem = document.createElement('script');
            elem.type = 'text/javascript';
            elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&load=package.full&lang=ru_RU';

            var container = document.getElementById('clinics_map');
            container.appendChild(elem);
            mapShowed = true;

          	setTimeout( function() {
              mapInit(container);
              ymapsInserted = true;
            }, 3000);
          }
        }
      });
    }

    // наблюдатель
    let observer = new IntersectionObserver(callback, options);

    observer.observe(target);
  }
}

$(document).on('click', '.map-block__button', function () {
  var center = $(this).attr('data-center');
  if(mapShowed === true && ymapsInserted === true) {
    $('.map-block__button').removeClass('is-active');
    $(this).addClass('is-active');
    clinics_map.setCenter(center.split(','), 10);
  }
  return false;
});

$(document).on('click', '.map-item__info .button', function () {
  var center = $(this).attr('data-center');
  var info =  $(this).attr('data-info');
  var placemark;

  if(mapShowed === true && ymapsInserted === true) {
    $('.map-item__info .button').removeClass('is-active');
    $(this).addClass('is-active');

    placemark = new ymaps.Placemark(center.split(','), {
      balloonContentBody: info
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'images/icons/map-pin.svg',
      // Размеры метки.
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -20]
    });

    clinics_map.geoObjects.removeAll();
    clinics_map.geoObjects.add(placemark);
    clinics_map.setCenter(center.split(','), 10);
  }
  return false;
});
