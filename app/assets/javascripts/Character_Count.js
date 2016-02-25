function updateCountdown() {
    // 20 is the max message length
    var remaining = 20 - jQuery('.message').val().length;
     jQuery('.countdown').text(remaining + ' characters remaining.');
}
function moneyforletters() {
    var typed = 0.05* jQuery('.message').val().length
    cashconvert = typed.toFixed(2);
    jQuery('.moneyup').text("£"+cashconvert);
}

jQuery(document).ready(function($) {
    updateCountdown();
    $('.message').change(updateCountdown);
    $('.message').keyup(updateCountdown);
});
jQuery(document).ready(function($) {
	moneyforletters();
	$('.message').change(moneyforletters);
	$('.message').keyup(moneyforletters);
});
