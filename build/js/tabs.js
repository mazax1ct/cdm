$(document).on('click', '.tabs__nav-button', function () {
  $(this).closest('.tabs').find('.tabs__nav-button').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-target="'+$(this).attr("data-target")+'"]').addClass('is-active');
  return false;
});
