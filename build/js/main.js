$(document).ready(function() {
  //кастомный селект
	$('.js-select').each(function() {
   var $p = $(this).closest('.select-wrapper__container');
   $(this).select2({
		 minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p,
     placeholder: $(this).attr('placeholder')
   });
	}).on("select2:open", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.addClass('open');
	}).on("select2:close", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.removeClass('open');
	});
});

//скролл по якорю
$(document).on('click', '.js-scroll-to', function () {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top - 20;
	$('body,html').animate({scrollTop: top}, 1000);
});

//показать/скрыть пароль
$(document).on('click', '.password-input__toggler', function () {
	var _this = $(this);
  _this.toggleClass('is-active');

	if(_this.hasClass('is-active')) {
		_this.closest('.password-input').find('input').attr("type", "text");
		_this.attr('title', 'Скрыть пароль')
		_this.find('svg use').attr('xlink:href', '#pass_visible');
	} else {
		_this.closest('.password-input').find('input').attr("type", "password");
		_this.attr('title', 'Показать пароль')
		_this.find('svg use').attr('xlink:href', '#pass_hidden');
	}
	return false;
});
