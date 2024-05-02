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

export const reviewsSwiper = new Swiper('.swiper--reviews', {
  direction: 'horizontal',
  loop: false,
  modules: [ Navigation ],
  slidesPerView: 'auto',
  //slideShadows: true,
  navigation: {
    prevEl: '.swiper-buttons__reviews-prev',
    nextEl: '.swiper-buttons__reviews-next',
  },
//  effect: 'coverFlow',
//   coverflowEffect: {
//     slideShadows: true,
//     rotate: 30,
//   },

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


//const breakpoint = window.matchMedia('(min-width: 1440px)');

// export const advSwiper = new Swiper('.swiper--advantages', {
//   direction: 'horizontal',
//   loop: false,
//   modules: [ Navigation ],
//   slidesPerView: 'auto',
//   navigation: {
//     prevEl: '.swiper-buttons__advantages-prev',
//     nextEl: '.swiper-buttons__advantages-next',
//   },

//   on: {
//     resize: function resizesScreen(swiper) {
//       let breakpoint = window.innerWidth;
//       if (breakpoint < 1440) {
//         swiper.disable();
//         swiper.destroy(true, true);
//       } else {
//         swiper.enable();
//         swiper.init();
//       }

//       if (breakpoint >= 1440) {

//         swiper.enable();
//         swiper.init();
//       } else {
//          swiper.disable();
//         swiper.destroy(true, true);
//       }
//     }
//   }
// });

// if (window.innerWidth < 1440) {
//   advSwiper.destroy();
// }

// function resizesScreen() {

//   if (breakpoint.matches) {

//    let advSwiper = new Swiper('.swiper--advantages', {
//       direction: 'horizontal',
//     loop: false,
//   modules: [ Navigation ],
//   slidesPerView: 'auto',
//   navigation: {
//     prevEl: '.swiper-buttons__advantages-prev',
//     nextEl: '.swiper-buttons__advantages-next',
//   },


//     });
//   } else {
//     Swiper.destroy(true, true);
//   }
// }
// breakpoint.addEventListener('change', resizesScreen)

const swiperList = document.querySelector('.advantages__swiper');
const sliderList = document.querySelector('.advantages__list');
const sliderItems = Array.from(sliderList.querySelectorAll('.advantages__item'));

const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings);
  };

  const checker = function() {
    swiperList.classList.remove('swiper');
    sliderList.classList.remove('swiper-wrapper');
    sliderItems.forEach((item) => {
      item.classList.remove('swiper-slide');
    })

    if (breakpoint.matches) {
      swiperList.classList.add('swiper');
      sliderList.classList.add('swiper-wrapper');
      sliderItems.forEach((item) => {
        item.classList.add('swiper-slide');
      })

      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) {
        swiper.destroy(true,true);
        swiper.disable();
      }
      //return;
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
};


resizableSwiper('(min-width: 1440px)', '.swiper--advantages', {
  direction: 'horizontal',
  loop: true,
  modules: [ Navigation ],
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.swiper-buttons__advantages-prev',
    nextEl: '.swiper-buttons__advantages-next',
  }
});
