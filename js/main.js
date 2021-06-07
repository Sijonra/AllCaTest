// === Burger ===

const burgerButton = document.querySelector('.header-burger');
const headerLinks = document.querySelector('.header-links');    
const body = document.getElementById('body');

burgerButton.addEventListener('click', ()=>{
    headerLinks.classList.toggle('header-links--active');
    burgerButton.classList.toggle('header-burger--animate');
    body.classList.toggle('overflow-hidden');
});

// === /Burger ===

// === Alert ===

const links = document.querySelectorAll('a');

links.forEach(element => {
    if(element.getAttribute('href') == "#" ||element.getAttribute('href') == ""){
        element.addEventListener('click', ()=>{
            alert("Coming Soon");
        });
    };
});

const array = ['.switch-buttons', '.reset-filter' ,'.input-search__button', '.button-sign-in', '.add-to-cards-item-wrapper__button'];
const buttonsArray = document.querySelectorAll(array);

buttonsArray.forEach(element => {
    console.log(element);
    element.addEventListener('click', ()=>{
        alert("Coming Soon");
    });
});

// console.log(link.getAttribute('href'));

// === /Alert ===

// === Slider ===

$(function() {
    $('.reviews-cards').slick({
        slidesToShow: 4,
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        autoplay: true,
        arrows : false,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 1025,
                settings:{
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    })
})

// === /Slider ===


// === input range ===

noUiSlider.create(document.getElementById('input-range-price'), {
    start: [0, 80],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 100
    },
});

noUiSlider.create(document.getElementById('input-range-number-of-character'), {
    start: [0, 80],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 100
    },
});

noUiSlider.create(document.getElementById('input-range-number-of-words'), {
    start: [0, 80],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 100
    },
});

// === Alert ===


