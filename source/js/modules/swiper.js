import 'swiper/css';
import Swiper from 'swiper';
import {Navigation, Pagination } from 'swiper/modules';
//import 'swiper/css/pagination';

export const heroSwiper = new Swiper('.swiper--hero', {
  direction: 'horizontal',
  loop: true,
  modules: [ Pagination ],
  watchSlidesProgress: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:  true,
    bulletElement: 'button',
    bulletClass: 'swiper-pagination-bullet',
    type: 'bullets',

    on: {
      init: function onFocus() {
        'swiper-pagination-bullet'.setAttribute('tabIndex', 0);
      }
    }
  },

  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  // },

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

const swiperListAdv = document.querySelector('.advantages__swiper');
const sliderListAdv = document.querySelector('.advantages__list');
const sliderItemsAdv = Array.from(sliderListAdv.querySelectorAll('.advantages__item'));

const swiperListGallery = document.querySelector('.gallery__swiper');
const sliderListGallery = document.querySelector('.gallery__list');
const sliderItemsGallery = Array.from(sliderListGallery.querySelectorAll('.gallery__item'));

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
    //return;
  };


  breakpoint.addEventListener('change', checker);
  checker();
};



const addSlides = (list, item) => {

  const clone = item.cloneNode(true);
  clone.classList.add('slider-clone');
  list.appendChild(clone);
};


const deleteSlides = (list) => {
  const clones = Array.from(list.querySelectorAll('.slider-clone'));
  clones.forEach((item) => item.parentNode.removeChild(item));
};


resizableSwiper('(min-width: 1440px)', '.swiper--advantages', {
  loop: true,
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 0,
  //width: 1220,

  // loopAddBlankSlides: false,
  // loopAdditionalSlides: 0,
  // observer: true,
  // observeParents: true,
  //centeredSlides: true,
  //slidesPerView: 3,
  //initialSlide: 1,
  //slidesPerGroup: 2,
  //allowSlidePrev: true,
      //allowSlideNext: true,


  modules: [ Navigation ],
  navigation: {
    prevEl: '.swiper-buttons__advantages-prev',
    nextEl: '.swiper-buttons__advantages-next',
  }
},
swiperListAdv,
sliderListAdv,
sliderItemsAdv,
//addSlides,
//deleteSlides
);

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
