import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';


const swiperSlide = document.querySelectorAll('.js__swiper');
// const slideProd = getElem

for (const slide of swiperSlide) { 
  const sliderId = '#'+ slide.getAttribute('id');
  const sliderOption = JSON.parse(slide.getAttribute('data-swiper'));
  const swiper = new Swiper(sliderId, sliderOption)
  console.log(sliderOption)
}

