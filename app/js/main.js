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



    // JQuery form styler

    $('.fliter__item-drop').on('click', function () {
        $(this).toggleClass('fliter__item-drop--active');
        $(this).next().slideToggle();
    });




});


// Tabs ==========
const tabsTriggerItem = document.querySelectorAll('.tabs-triggers__item');
if (tabsTriggerItem.length > 0) {
    tabsTriggerItem.forEach((item) =>

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
}







// Select

document.querySelectorAll('.select').forEach(select => { //Выбриаем все выпадающие списки на странице

    let selectCurrent = select.querySelector('.select__current'),
        selectList = select.querySelector('.select__list'),
        selectInput = select.querySelector('.select__input'),
        selectArrow = select.querySelector('.arrow-select'),
        selectItem = select.querySelectorAll('.select__item');


    //по клику добавляем/удалям класс
    selectCurrent.addEventListener('click', () => {
        selectList.classList.toggle('select__list--show')
    })

    //по клику добавляем/удалям класс
    selectArrow.addEventListener('click', () => {
        selectList.classList.toggle('select__list--show')
    })

    //обходим элементы списка
    selectItem.forEach(item => {

        //обрабатываем событие клик по элементу
        item.addEventListener('click', () => {

            //получаем значение из data-атрибута
            let itemValue = item.getAttribute('data-value')

            //получаем содержание элемента (текст)
            let itemText = item.textContent

            //присваиваем инпуту ранее полученное значение из data-атрибута
            selectInput.value = itemValue

            //присваиваем текущее значение (текст)
            selectCurrent.textContent = itemText

            //скрываем выпадающий список
            selectListHide()
        })
    })

    // функция закрытия выпадающего списка
    let selectListHide = () => {
        selectList.classList.remove('select__list--show')
    }
    //Закрываем выпадающий сисок, если клик был вне области
    document.addEventListener('mouseup', (e) => {
        if (!select.contains(e.target)) selectListHide()
    })

})


// Форма обратной связи 

$(document).ready(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});


// RangeSlider ============

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1200000,
    from: 0,
    to: 800000,
    grid: false,
});