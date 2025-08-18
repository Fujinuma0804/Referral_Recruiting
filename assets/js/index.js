$(document).ready(function () {
    // Page top button functionality
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('#page-top-btn').addClass('show');
        } else {
            $('#page-top-btn').removeClass('show');
        }
    });

    $('#page-top-btn').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // Mobile menu functionality
    $('#mobile-menu-btn').on('click', function() {
        $('#mobile-menu').removeClass('translate-x-full').addClass('translate-x-0');
        $('body').addClass('overflow-hidden');
        $('#hamburger-icon').addClass('hidden');
        $('#close-icon').removeClass('hidden');
    });

    $('#close-menu-btn').on('click', function() {
        $('#mobile-menu').removeClass('translate-x-0').addClass('translate-x-full');
        $('body').removeClass('overflow-hidden');
        $('#hamburger-icon').removeClass('hidden');
        $('#close-icon').addClass('hidden');
    });

    // Close menu when clicking on menu items
    $('#mobile-menu nav a').on('click', function() {
        $('#mobile-menu').removeClass('translate-x-0').addClass('translate-x-full');
        $('body').removeClass('overflow-hidden');
        $('#hamburger-icon').removeClass('hidden');
        $('#close-icon').addClass('hidden');
    });

    // Close menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#mobile-menu, #mobile-menu-btn').length) {
            $('#mobile-menu').removeClass('translate-x-0').addClass('translate-x-full');
            $('body').removeClass('overflow-hidden');
            $('#hamburger-icon').removeClass('hidden');
            $('#close-icon').addClass('hidden');
        }
    });

    $('.carousel').slick({
        slidesToShow: 2,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '15%',
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Autoplay interval in milliseconds
        responsive: [
            {
                breakpoint: 1024, // screens smaller than 768px
                settings: {
                    slidesToShow: 3,
                    centerPadding: '0%'
                }
            },
            {
                breakpoint: 768, // screens smaller than 768px
                settings: {
                    slidesToShow: 1,
                    centerPadding: '15%'
                }
            }
        ]
    });
    $('.carousel_semina').slick({
        slidesToShow: 4,
        arrows: true,
        centerMode: true,
        centerPadding: '0%',
        // autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Autoplay interval in milliseconds
        responsive: [
            {
                breakpoint: 1024, // screens smaller than 768px
                settings: {
                    slidesToShow: 3,
                    centerPadding: '0%'
                }
            },
            {
                breakpoint: 768, // screens smaller than 768px
                settings: {
                    slidesToShow: 1,
                    centerPadding: '15%'
                }
            }
        ]
    });

    $('.carousel_voice').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: true,
        infinite: true,
        speed: 700,
        centerPadding: '0%',
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Autoplay interval in milliseconds
    });

    // Update slide counter
    $('.carousel_semina').on('afterChange', function (event, slick, currentSlide) {
        var totalSlides = slick.slideCount;
        var currentSlideNumber = currentSlide + 1;
        $('.slick-counter').text(currentSlideNumber + ' / ' + totalSlides);
    });
});