$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
});
/* ---------------------------------------------
 portfolio filtering
 --------------------------------------------- */

var $portfolio = $('.portfolio');
if ($.fn.imagesLoaded && $portfolio.length > 0) {
    imagesLoaded($portfolio, function() {
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            filter: '*'
        });
        $(window).trigger("resize");
    });
}

$('.portfolio-filter').on('click', 'a', function(e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $portfolio.isotope({ filter: filterValue });
});


/*---------------------------------------------
 Portfolio popup
 ---------------------------------------------*/


/*----------------------------------------------------*/
/*	Testimonials Rotator
/*----------------------------------------------------*/

var owl = $('.reviews-holder');
owl.owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    navBy: 1,
    autoplayTimeout: 4500,
    autoplayHoverPause: false,
    smartSpeed: 1500,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});