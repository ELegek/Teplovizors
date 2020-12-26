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
        responsive: [{
                breakpoint: 1070,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: false,
                }
            },
        ]
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
        responsive: [{
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
        ]
    });


    $('.product-sliderbig').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-slidersmall',
    });

    $('.product-slidersmall').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-sliderbig',
        focusOnSelect: true,
    });

    $('.accessories__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    });


    // JQuery form styler

    $('.fliter__item-drop').on('click', function () {
        $(this).toggleClass('fliter__item-drop--active');
        $(this).next().slideToggle();
    });




    // Кнопки переключения тегов
    $('.catalog-link').on('click', function (e) {
        e.preventDefault();
        $('.catalog-link').removeClass('catalog-link__active')
        $(this).addClass('catalog-link__active');
    });

    // Кнопки сортировки фильтра
    $('.catalog-sort__link').on('click', function (e) {
        e.preventDefault();
        $('.catalog-sort__link').removeClass('catalog-sort__link-active')
        $(this).addClass('catalog-sort__link-active');
    });

    // Кнопки переключения мобильных тегов

    $('.mobile__teg-item').on('click', function (e) {
        e.preventDefault();
        $('.mobile__teg-item').removeClass('mobile__teg-item-active')
        $(this).addClass('mobile__teg-item-active');
    });

    // Кнопки тега и сортировки

    $('.teg').on('click', function () {
        $('.mobile__sorting-list').removeClass('mobile__sorting-list-active')
        $('.mobile__teg-list').toggleClass('mobile__teg-list-active')
    });

    $('.sorting').on('click', function () {
        $('.mobile__teg-list').removeClass('mobile__teg-list-active')
        $('.mobile__sorting-list').toggleClass('mobile__sorting-list-active')
    });

    // Переключение мобильных кнопок сортировки
    $('.mobile__sorting-item').on('click', function (e) {
        e.preventDefault();
        $('.mobile__sorting-item').removeClass('mobile__sorting-item-active')
        $(this).addClass('mobile__sorting-item-active');
    });


    // Кнопки переключения просмотра в каталоге товаров


    $('.sort__btn-grid').on('click', function () {
        $(this).addClass('sort__btn-active');
        $('.sort__btn-list').removeClass('sort__btn-active');
        $('.catalog__inner-item').removeClass('catalog__inner-item--list');
    });

    $('.sort__btn-list').on('click', function () {
        $(this).addClass('sort__btn-active');
        $('.sort__btn-grid').removeClass('sort__btn-active');
        $('.catalog__inner-item').addClass('catalog__inner-item--list');
    });

    // Аккордеон

    $(function () {
        // hide all content
        $('.accordeon_content').hide();

        $('.accordeon_title').click(function () {
            $(this).parent().toggleClass('active').siblings().removeClass('active');
            $('.accordeon_content').slideUp();

            if (!$(this).next().is(":visible")) {
                $(this).next().slideDown();
            }
        });
    });


    // Menu burger
    document.querySelector('.header__burger').onclick = function () {
        document.querySelector('.header__burger-btn').classList.toggle('active');
        document.querySelector('.menu__mobile-list').classList.toggle('active');
    };



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




$(function () {
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
});

// Popup window
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popuplink = popupLinks[i];
        popuplink.addEventListener('click', function (e) {
            const popupName = popuplink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.opne');
        popupClose(popupActive);
    }
});


$(function () {
    // RangeSlider ============

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1200000,
        from: 0,
        to: 800000,
        grid: false,
    });

});


$(function () {
    // RateYo 

    $('.rate-yo').rateYo({
        ratedFill: "#FF7900",
        spacing: "5px",
        normalFill: "#BDBDBD",
        starWidth: "13px"
    });

});

$(function () {
    // RateYo__review

    $('.rate-yo__review').rateYo({
        ratedFill: "#FF7900",
        spacing: "5px",
        normalFill: "#BDBDBD",
        starWidth: "18px"
    });

});

$(function () {
    // RateYo__form

    $('.rate-yo-form').rateYo({
        ratedFill: "#FF7900",
        spacing: "75px",
        normalFill: "#BDBDBD",
        starWidth: "30px"
    });

});

$(function () {
    $('.filter-style').styler();
});


// Стилизуем кнопки каталога товаров

$(function () {
    // Кнопка сравнение в позиции list
    $('.catalog__inner-compare-list').on('click', function () {
        $(this).toggleClass('catalog__inner-compare-list--active');
    });
    // Кнопка добавить в избранное в позиции list
    $('.catalog__inner-like-list').on('click', function () {
        $(this).toggleClass('catalog__inner-like-list--active');
    });
});

$(function () {
    // Кнопка сравнение в позиции list
    $('.product-compare').on('click', function () {
        $(this).toggleClass('product-compare--active');
    });
    // Кнопка добавить в избранное в позиции list
    $('.product-like').on('click', function () {
        $(this).toggleClass('product-like--active');
    });
});


$(function () {
    // Кнопка сравнение в позиции grid
    $('.compare-btn').on('click', function () {
        $(this).toggleClass('compare-btn--active');
    });

    // Кнопка добавить в корзину
    $('.catalog__inner-button').on('click', function () {
        $(this).toggleClass('catalog__inner-button--active');
    });

    // Кнопка добавления в избранное в позиции grid
    $('.catalog__inner-like').on('click', function () {
        $(this).toggleClass('catalog__inner-like--active');
    });
});