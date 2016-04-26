function updateCountdown() {
    // 20 is the max message length
    var remaining = 20 - jQuery('.message').val().length;
     jQuery('.countdown').text(remaining + ' characters remaining.');
}
function moneyforletters() {
    var typed = 0.05* jQuery('.message').val().length
    cashconvert = typed.toFixed(2);
    jQuery('#blog_fee').val(cashconvert);
}

jQuery(document).ready(function($) {
    updateCountdown();
    $('.message').change(updateCountdown);
    $('.message').keyup(updateCountdown);
});
jQuery(document).ready(function($) {
	moneyforletters();
  var earnings = "money"
	$('.message').change(moneyforletters);
	$('.message').keyup(moneyforletters);
  $("#text_field").val(earnings);
});
