$(document).on('click', '.js-dropmenu-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.dropmenu__item').find('.dropmenu__dropdown').slideToggle();
  $(this).closest('.dropmenu__item').find('.dropmenu__link').toggleClass('is-active');

  return false;
});
