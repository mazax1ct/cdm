$(document).on('click', '.tabs__nav-button', function () {
  var target = $('.analysis-detail');
  $('html, body').animate({
    scrollTop: target.offset().top - 10
  }, 0);
  return false;
});
