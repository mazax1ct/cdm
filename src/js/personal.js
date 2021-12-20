$(document).on('click', '.js-personal-menu-opener', function () {
  $('body').addClass('overflow');
  $('.personal__menu-block').fadeIn('300', function () {
    $('.personal__menu-block-inner').addClass('is-open');
    document.addEventListener('click', closePersonalMenu);
  });
  return false;
});

$(document).on('click', '.js-personal-menu-closer', function () {
  $('.personal__menu-block-inner').removeClass('is-open');
  setTimeout(function() {
    $('.personal__menu-block').fadeOut();
    $('body').removeClass('overflow');
    document.removeEventListener('click', closePersonalMenu);
  }, 300);
  return false;
});

function closePersonalMenu(evt) {
  if (!$('.personal__menu-block-inner').is(evt.target) && $('.personal__menu-block-inner').has(evt.target).length === 0) {
    $('.personal__menu-block-inner').removeClass('is-open');
    setTimeout(function() {
      $('.personal__menu-block').fadeOut();
      $('body').removeClass('overflow');
      document.removeEventListener('click', closePersonalMenu);
    }, 300);
	}
}
