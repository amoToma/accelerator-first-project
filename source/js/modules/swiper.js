import 'swiper/css';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
//import 'swiper/css/pagination';

export const heroSwiper = new Swiper('.swiper--hero', {
  direction: 'horizontal',
  loop: true,
  modules: [ Pagination ],

  pagination: {
    el: '.swiper-pagination',
    clickable:  true,
    bulletElement: 'button',
  },

  watchSlidesProgress: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

});

// heroSwiper.on('slideChange', function () {

// })


export const toursSwiper = new Swiper('.swiper--tours', {
  direction: 'horizontal',
  loop: false,
  modules: [ Navigation ],

  navigation: {
    prevEl: '.swiper-button--prev',
    nextEl: '.swiper-button--next',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1366: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});



