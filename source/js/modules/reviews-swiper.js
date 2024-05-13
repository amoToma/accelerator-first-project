import 'swiper/css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const reviewsSwiper = new Swiper('.swiper--reviews', {
  direction: 'horizontal',
  loop: false,
  modules: [ Navigation ],
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.swiper-buttons__reviews-prev',
    nextEl: '.swiper-buttons__reviews-next',
  },

  breakpoints: {
    320: {
      width: 290,
      slidesPerView: 1,
      spaceBetween: 40,
      initialSlide: 0,
    },

    768: {
      width: 565,
      slidesPerView: 1,
      spaceBetween: 30,
      initialSlide: 0,
    },

    1440: {
      width: 700,
      slidesPerView: 1,
      spaceBetween: 120,
      initialSlide: 0,
    },
  }
});
