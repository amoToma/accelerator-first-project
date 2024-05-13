import 'swiper/css';
import {Navigation } from 'swiper/modules';
import { resizableSwiper } from './utils';

const swiperListGallery = document.querySelector('.gallery__swiper');
const sliderListGallery = document.querySelector('.gallery__list');
const sliderItemsGallery = Array.from(sliderListGallery.querySelectorAll('.gallery__item'));

resizableSwiper('(max-width: 1439px)', '.swiper--gallery', {
  direction: 'horizontal',
  loop: true,
  modules: [ Navigation ],
  slidesPerView: 2,
  spaceBetween: 4,
  navigation: {
    prevEl: '.swiper-buttons__gallery-prev',
    nextEl: '.swiper-buttons__gallery-next',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  }
},

swiperListGallery,
sliderListGallery,
sliderItemsGallery
);
