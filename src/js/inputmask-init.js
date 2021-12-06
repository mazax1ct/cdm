$(document).ready(function() {
  $(".js-phone-mask").inputmask("+7 (999) 999 99 99", {
    "clearIncomplete": true,
    showMaskOnHover: false
  });

  $(".js-email-mask").inputmask({ alias: "email", "clearIncomplete": true, showMaskOnHover: false});

  $(".js-date").inputmask({ alias: "datetime", inputFormat: "dd.mm.yyyy", placeholder: "_", "clearIncomplete": true, showMaskOnHover: false});
});
