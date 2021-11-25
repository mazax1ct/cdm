$(document).on('click', '.js-menu-opener', function () {
  $('body').addClass('overflow');
  $('.header__bottom').fadeIn('300', function () {
    $('.header__bottom-inner').addClass('is-open');
    document.addEventListener('click', closeMenu);
  });
  return false;
});

$(document).on('click', '.js-menu-closer', function () {
  $('.header__bottom-inner').removeClass('is-open');
  setTimeout(function() {
    $('.header__bottom').fadeOut();
    $('body').removeClass('overflow');
    document.removeEventListener('click', closeMenu);
  }, 300);
  return false;
});

function closeMenu(evt) {
  if (!$('.header__bottom-inner').is(evt.target) && $('.header__bottom-inner').has(evt.target).length === 0) {
    $('.header__bottom-inner').removeClass('is-open');
    setTimeout(function() {
      $('.header__bottom').fadeOut();
      $('body').removeClass('overflow');
      document.removeEventListener('click', closeMenu);
    }, 300);
	}
}
