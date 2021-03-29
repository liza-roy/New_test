$(window).on("scroll", function () {
    if ($(window).scrollTop() > 200) {
        $(".header").addClass("active");
    } else {
        $(".header").removeClass("active");
    }
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    stagePadding: 50,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 7000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
});
