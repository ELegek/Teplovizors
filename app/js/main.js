$(function () {


    $('.slider').slick({
        prevArrow: '<div class="btn-container"><button class="slider-btn slider-btn__left"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.5L1.5 10L10 18.5" stroke="#01274F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>',

        nextArrow: '<div class="btn-container"><button class="slider-btn slider-btn__right"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18.5L10.5 10L2 1.5" stroke="#01274F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>',
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });


});