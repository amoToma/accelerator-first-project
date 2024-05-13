import 'swiper/css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const instructorsSwiper = new Swiper('.swiper--instructors', {
  direction: 'horizontal',
  loop: false,
  modules: [ Navigation ],

  navigation: {
    prevEl: '.swiper-buttons__instructors-prev',
    nextEl: '.swiper-buttons__instructors-next',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: 2,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});
