(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 300, 'easeInOutExpo');
        return false;
    });

    //typed text animation in appointment page
    if ($('.typed-text-output').length == 1) {
        var typed_strings = "Set an Appointment Now";
        var typed = new Typed('.typed-text-output', {
          strings: [typed_strings],
          typeSpeed: 60,
          backSpeed: 20,
          smartBackspace: false,
          loop: false
        });
    }

    //typed text animation in contact page
    if ($('.typed-text').length == 1) {
        var typed_strings = "Not Sure What You Need? Get in Touch with Us";
        var typed = new Typed('.typed-text', {
          strings: [typed_strings],
          typeSpeed: 35,
          backSpeed: 20,
          smartBackspace: false,
          loop: false
        });
    }


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

