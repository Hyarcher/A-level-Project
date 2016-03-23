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
counter = function() {
    var value = $('#text').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        $('#totalChars').html(0);
        $('#charCount').html(0);
        $('#charCountNoSpace').html(0);
        $('#maxCharCount').html(140);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;

    $('#wordCount').html(wordCount);
    $('#totalChars').html(totalChars);
    $('#charCount').html(charCount);
    $('#charCountNoSpace').html(charCountNoSpace);
};

$(document).ready(function() {
    $('#count').click(counter);
    $('#text').change(counter);
    $('#text').keydown(counter);
    $('#text').keypress(counter);
    $('#text').keyup(counter);
    $('#text').blur(counter);
    $('#text').focus(counter);
});

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
