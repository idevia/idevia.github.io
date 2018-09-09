(function($) {
    $('#hamburger').on('click', function() {
        $("body, html").toggleClass("open-nav");
    });

    $('.backdrop').on('click', function(){
        $("body, html").removeClass("open-nav");
    });
    $('.nav-links').on('click', 'li', function(){
        $("body, html").removeClass("open-nav");
    });
})(jQuery)