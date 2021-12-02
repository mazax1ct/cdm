$(document).on('click', '.js-filter-opener', function () {
  $('body').addClass('overflow');
  $('.prices-list__filter-block').fadeIn('300', function () {
    $('.prices-list__filter').addClass('is-open');
    document.addEventListener('click', closeFilter);
  });
  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('.prices-list__filter').removeClass('is-open');
  setTimeout(function() {
    $('.prices-list__filter-block').fadeOut();
    $('body').removeClass('overflow');
    document.removeEventListener('click', closeFilter);
  }, 300);
  return false;
});

function closeFilter(evt) {
  if (!$('.prices-list__filter').is(evt.target) && $('.prices-list__filter').has(evt.target).length === 0) {
    $('.prices-list__filter').removeClass('is-open');
    setTimeout(function() {
      $('.prices-list__filter-block').fadeOut();
      $('body').removeClass('overflow');
      document.removeEventListener('click', closeFilter);
    }, 300);
	}
}
