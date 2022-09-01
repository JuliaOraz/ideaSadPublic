import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const swiperProd_1 = new Swiper('.js__swiperProd_1', {
  // loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.js__swiperProd_1--next',
    prevEl: '.js__swiperProd_1--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    1260: {
      slidesPerView: 4,
    }
  }
})

const swiperProd_2 = new Swiper('.js__swiperProd_2', {
  // loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.js__swiperProd_2--next',
    prevEl: '.js__swiperProd_2--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    1260: {
      slidesPerView: 4,
    }
  }

});

const swiperVideo = new Swiper('.js__swiperVideo', {
  // loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.js__swiperVideo--next',
    prevEl: '.js__swiperVideo--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1260: {
      slidesPerView: 3,
    }
  }

});

const swiperProd_3 = new Swiper('.js__swiperProd_3', {
  // loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.js__swiperProd_3--next',
    prevEl: '.js__swiperProd_3--prev',
  },
  
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    1260: {
      slidesPerView: 5,
    }
  }

})

// const swiperArticles = new Swiper('.js__articles', {
//   slidesPerView: 1,
//   navigation: {
//     nextEl: '.js__articles--next',
//     prevEl: '.js__articles--prev',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       init: true,
//     },
//     480: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 2,
//     },
//     1260: {
//       init: false,
//     }
//   }

// });




// const swiper = document.querySelector('.js__swiperProd_3').swiper;
// console.log(swiper)
// const initSwiperProd_3 = document.querySelector('.js__swiperProd_3').swiper;
// console.log(initSwiperProd_3)
// const slideSwiperProd_3 = initSwiperProd_3.querySelectorAll('.product_short');



// if (slideSwiperProd_3.length > 5) { 
//   initSwiperProd_3.init();
// }