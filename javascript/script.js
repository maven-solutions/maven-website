//For Navigation Bar - Sticky and Responsive
var header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})

const hamBurger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__links");
const navLinks = document.querySelectorAll(".nav__links li");

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamBurger.classList.toggle('toggle');
        nav.classList.toggle('display-off');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        })
    }
    )
})

const navSlide = () => {
    hamBurger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        })
        hamBurger.classList.toggle('toggle');
        nav.classList.toggle('display-off');
    })
}

navSlide();

$(document).ready(function () {
    $(".pc__counter").countUp({
        delay: 10,
        time: 1000,
    });
});

$('.slider').slick({
    adaptiveHeight: false,
    infinite: true,
    speed: 300,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: true
            }
        }]
});

$('.st__body').slick({
    adaptiveHeight: false,
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    nextArrow: false,
    // rtl:true,
    responsive: [
        {
            breakpoint: 965,
            settings: {
                slidesToShow: 3,
                arrows: true
            }
        },
        {
            breakpoint: 744,
            settings: {
                slidesToShow: 2,
                arrows: true

            }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
    ]
});

$('.st__body1').slick({
    adaptiveHeight: false,
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 4,
    slidesToScroll:1,
    autoplay: false,
    dots: false,
    prevArrow: false,
    autoplay: true,
    dots: false,
    // rtl:false,
    responsive: [
        {
            breakpoint: 965,
            settings: {
                slidesToShow: 3,
                arrows: true
            }
        },
        {
            breakpoint: 744,
            settings: {
                slidesToShow: 2,
                arrows: true

            }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
    ]
});


let autoplaySpeed = 2500;
let autoplayOn    = true;

// let $slickRoot = ;

$('.st__body').on('init', function() {
    let $slickList = $('.st__body').find('.slick-list');

    $slickList.mouseenter(function() {
        autoplayOn = false;
    });
    $slickList.mouseleave(function() {
        autoplayOn = true;
    });

    window.setInterval(function() {
        if (!autoplayOn) return;
        $('.st__body').slick('slickPrev');
    }, autoplaySpeed);
});

// $('.st__body1').on('init', function() {
//     let $slickList = $('.st__body1').find('.slick-list');

//     $slickList.mouseenter(function() {
//         autoplayOn = false;
//     });
//     $slickList.mouseleave(function() {
//         autoplayOn = true;
//     });

//     window.setInterval(function() {
//         if (!autoplayOn) return;
//         $('.st__body1').slick('slickPrev');
//     }, autoplaySpeed);
// });


$('.st__body').slick({
    adaptiveHeight: false,
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 4,
    slidesToScroll:1,
    autoplay: false,
    dots: false,
    prevArrow: false,
    autoplay: true,
    dots: false,
    // rtl:false,
    responsive: [
        {
            breakpoint: 965,
            settings: {
                slidesToShow: 3,
                arrows: true
            }
        },
        {
            breakpoint: 744,
            settings: {
                slidesToShow: 2,
                arrows: true

            }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
    ]
});

// $('.st__body1').slick({
//     adaptiveHeight: false,
//     infinite: true,
//     speed: 300,
//     dots: true,
//     slidesToShow: 4,
//     slidesToScroll:1,
//     autoplay: false,
//     dots: false,
//     prevArrow: false,
//     autoplay: true,
//     dots: false,
//     // rtl:false,
//     responsive: [
//         {
//             breakpoint: 965,
//             settings: {
//                 slidesToShow: 3,
//                 arrows: true
//             }
//         },
//         {
//             breakpoint: 744,
//             settings: {
//                 slidesToShow: 2,
//                 arrows: true

//             }
//         },
//         {
//             breakpoint: 410,
//             settings: {
//                 slidesToShow: 1,
//                 arrows: false
//             }
//         },
//     ]
// });