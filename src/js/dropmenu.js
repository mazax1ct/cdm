$(document).on('click', '.js-dropmenu-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.dropmenu__item').find('.dropmenu__dropdown').slideToggle();
  $(this).closest('.dropmenu__item').find('.dropmenu__link').toggleClass('is-active');

  return false;
});

$(document).on('click', '.js-sub-dropmenu-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.dropmenu__dropdown-item').find('.dropmenu__sub-dropdown').slideToggle();
  $(this).closest('.dropmenu__dropdown-item').find('.dropmenu__link').toggleClass('is-active');

  return false;
});
