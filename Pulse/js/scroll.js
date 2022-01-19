$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn('fast');
        } else {
            $('.pageup').fadeOut('fast');
        }
    });
});