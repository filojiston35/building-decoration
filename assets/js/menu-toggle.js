$('.menu-toggle input[type=checkbox]').change(function() {
    if ($(this).is(':checked')) {
        $('.menu-toggle input[type=checkbox]').each(function(index) {
            $(this).prop("checked", true);
        });
        $('header').addClass('active');
        $('.menu').addClass('active');
        $('.menu .contact-container').addClass('active');
        $('.menu .navigation').addClass('active');

        //LOCK BODY SCROLL
        $("body").css("overflow-y", "hidden");
    } else {
        $('.menu-toggle input[type=checkbox]').each(function(index) {
            $(this).prop("checked", false);
        });
        $('header').removeClass('active');
        $('.menu').removeClass('active');
        $('.menu .contact-container').removeClass('active');
        $('.menu .navigation').removeClass('active');
        //UNLOCK BODY SCROLL
        $("body").css("overflow-y", "auto");
    }
})