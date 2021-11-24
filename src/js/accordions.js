$(document).on('click', '.accordion__toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.accordion').find('.accordion__body').slideToggle();
  return false;
});
