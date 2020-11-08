$(function () {


    $('.slider').slick({
        prevArrow: '<div class="btn-container"><button class="slider-btn slider-btn__left"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.5L1.5 10L10 18.5" stroke="#01274F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>',

        nextArrow: '<div class="btn-container"><button class="slider-btn slider-btn__right"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18.5L10.5 10L2 1.5" stroke="#01274F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>',
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
    });


    $('.products__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
    });

    $('.slider-blog__wrapper').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
    });

    $('.categories-slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    });



});

document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tabs-triggers__item').forEach(
            (child) => child.classList.remove('tabs-triggers__item--active')
        );
        document.querySelectorAll('.tabs-content__item ').forEach(
            (child) => child.classList.remove('tabs-content__item--active')
        );

        item.classList.add('tabs-triggers__item--active');
        document.getElementById(id).classList.add('tabs-content__item--active');

        $('.categories-slider').slick('setPosition');
    })
);

document.querySelector('.tabs-triggers__item').click();




// Select

let select = function() {
    let selectHeader = document.querySelectorAll('.select__header');

    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {  
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText;
        let select = this.closest('.select');
        let currentText = select.querySelector('.select__current');

        currentText.innerText = text;
        select.classList.remove('is-active');
    }
}

select()