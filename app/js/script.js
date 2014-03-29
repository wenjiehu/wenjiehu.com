(function($) {
    'use strict';
    $(function() {
        // add scroll effect for anchor
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - $('.navbar').outerHeight()
                    }, 300);
                    return false;
                }
            }
        });

    });

})(jQuery);
