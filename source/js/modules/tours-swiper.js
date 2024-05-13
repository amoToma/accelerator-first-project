import 'swiper/css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const toursSwiper = new Swiper('.swiper--tours', {
  direction: 'horizontal',
  loop: false,
  modules: [ Navigation ],

  navigation: {
    prevEl: '.swiper-buttons__tours-prev',
    nextEl: '.swiper-buttons__tours-next',
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

    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});
