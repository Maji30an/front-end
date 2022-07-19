const openMenu  = document.getElementById('btn-menu');
const navbar    = document.getElementById('navbar')
const closeMenu = document.getElementById('btn-close');
const menu      = navbar.parentElement;

openMenu.addEventListener('click', () => {
    menu.style.display = 'block';
    navbar.style.animation = 'open 1s';
    setTimeout(() => {
        navbar.style.left = 0;
    }, 100);
});

navbar.addEventListener('click', e => e.stopPropagation());
menu.addEventListener('click', close);
closeMenu.addEventListener('click', close);

function close() {
    navbar.style.left = '-288px';
    navbar.style.animation = 'close 1s'
    setTimeout(() => {
        navbar.style.left = 0;
        menu.style.display = 'none';
    }, 1000);
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.dot',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.comments__button-slider-next',
        prevEl: '.comments__button-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

