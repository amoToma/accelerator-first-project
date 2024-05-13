import 'swiper/css';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const heroSliders = Array.from(document.querySelectorAll('.hero-slide'));
const swiperLinks = Array.from(document.querySelectorAll('.hero-slide__link'));

export const heroSwiper = new Swiper('.swiper--hero', {
  direction: 'horizontal',
  loop: true,
  modules: [ Pagination ],
  watchSlidesProgress: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:  true,
    bulletElement: 'button',
    type: 'bullets',
  },
});

heroSwiper.on('activeIndexChange', () => {
  heroSliders.forEach((item, index) => {
    if (item.classList.contains('swiper-slide-active')) {
      swiperLinks[index].setAttribute('tabindex', '0');
    } else {
      swiperLinks[index].setAttribute('tabindex', '-1');
    }
  });
});
