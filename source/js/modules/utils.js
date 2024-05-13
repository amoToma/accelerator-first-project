import 'swiper/css';
import Swiper from 'swiper';

const resizableSwiper = (breakpoint, swiperClass, swiperSettings, swiperList, sliderList, sliderItems, addsSlides, deletesSlides) => {
  let swiper;
  breakpoint = window.matchMedia(breakpoint);
  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings);
  };
  const checker = function() {
    swiperList.classList.remove('swiper');
    sliderList.classList.remove('swiper-wrapper');
    if (deletesSlides) {
      deletesSlides(sliderList);
    }
    sliderItems.forEach((item) => {
      item.classList.remove('swiper-slide');
    });
    if (breakpoint.matches) {
      sliderItems.forEach((item) => {
        item.classList.add('swiper-slide');
        if (addsSlides) {
          addsSlides(sliderList, item);
        }
      });
      swiperList.classList.add('swiper');
      sliderList.classList.add('swiper-wrapper');
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) {
        if (deletesSlides) {
          deletesSlides(sliderList);
        }
        swiper.destroy(true,true);
        swiper.disable();
      }
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
};

export { resizableSwiper };
