import { getNode } from './main_page/index.js'

/* -------------------------------------------------------------------------- */
/*                                popup_beauty                                */
/* -------------------------------------------------------------------------- */
window.onload = function () {
  getNode('.close_popup').onclick = function () {
      getNode('#modal').style.display = "none"
  };
};

/* -------------------------------------------------------------------------- */
/*                                 main_banner                                */
/* -------------------------------------------------------------------------- */
const mainBannerSwiper = new Swiper('.swiper_main_banner', {
  autoplay: true,
  autoplay: {
    disableOnInteraction: false,
  }, 
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.main_banner_next',
    prevEl: '.main_banner_prev',
  },
})

/* -------------------------------------------------------------------------- */
/*                                  오늘의 상품 추천                                 */
/* -------------------------------------------------------------------------- */
const todayRecommendSwiper = new Swiper('.swiper_recommend_products', {
  slidesPerView: 4,
  slidesPerGroup : 4,
  spaceBetween: 18,
  speed: 500,
  navigation: {
    nextEl: '.recommend_products_next',
    prevEl: '.recommend_products_prev',
  },
})