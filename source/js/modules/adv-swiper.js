import 'swiper/css';
import {Navigation } from 'swiper/modules';
import { resizableSwiper } from './utils';

const swiperListAdv = document.querySelector('.advantages__swiper');
const sliderListAdv = document.querySelector('.advantages__list');
const sliderItemsAdv = Array.from(sliderListAdv.querySelectorAll('.advantages__item'));

resizableSwiper('(min-width: 1440px)', '.swiper--advantages', {
  loop: true,
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 0,
  modules: [ Navigation ],
  navigation: {
    prevEl: '.swiper-buttons__advantages-prev',
    nextEl: '.swiper-buttons__advantages-next',
  }
},
swiperListAdv,
sliderListAdv,
sliderItemsAdv,
);
