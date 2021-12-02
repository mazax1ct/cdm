$(document).on('click', '.lists-block__nav-button', function () {
  $(this).closest('.lists-block').find('.lists-block__nav-button').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.lists-block').find('.lists-block__tab').removeClass('is-active');
  $(this).closest('.lists-block').find('.lists-block__tab[data-target="'+$(this).attr("data-target")+'"]').addClass('is-active');
  return false;
});
