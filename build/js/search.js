$(document).on('focus', '.search-bar__input', function () {
  $('.search-bar__dropdown').addClass('is-active');
  setTimeout(function() {
    $('.search-bar__dropdown').addClass('is-open');
    document.addEventListener('click', closeSearch);
  }, 100);
});

function closeSearch(evt) {
  if (!$('.search-bar__form').is(evt.target) && $('.search-bar__form').has(evt.target).length === 0) {
    $('.search-bar__dropdown').removeClass('is-open');
    setTimeout(function() {
      $('.search-bar__dropdown').removeClass('is-active');
      document.removeEventListener('click', closeSearch);
    }, 100);
	}
}

const searchScroller = new Scroller({
    el: document.querySelector('.js-search-scrooler'),
    scrollbar: 'hidden',
    anchors: 'hidden',
    align: 'left',
    start: 'start'
});
