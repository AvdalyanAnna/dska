var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".mySwiper .swiper-next",
        prevEl: ".mySwiper .swiper-prev",
    },
});
var typeSwiper = new Swiper(".typeSwiper", {
    navigation: {
        nextEl: ".typeSwiper .swiper-next",
        prevEl: ".typeSwiper .swiper-prev",
    },

});
var reviewsSwiper = new Swiper(".reviewsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".reviewsSwiper .swiper-next",
        prevEl: ".reviewsSwiper .swiper-prev",
    },
    breakpoints: {
        1024: {
            spaceBetween: 28,
        },
    },
});
var advSwiper = new Swiper(".advSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".advSwiper .swiper-next",
        prevEl: ".advSwiper .swiper-prev",
    },
});
var tariffsSwiper = new Swiper(".tariffsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".tariffsSwiper .swiper-next",
        prevEl: ".tariffsSwiper .swiper-prev",
    },
});

const headerItem = document.querySelectorAll('.header-menu__item')
const headerShow = document.querySelector('.header-menu-show-item')

headerItem.forEach(item => {
    item.addEventListener('click', e => {
        item.classList.toggle('bg-[#f5f5f5]')
        headerShow.classList.toggle('hidden')
        headerShow.classList.toggle('block')
    });
});