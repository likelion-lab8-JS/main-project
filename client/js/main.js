import { getNode, recommendProductsSwiper } from './main_page/index.js'

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
  pagination: {
    el: ".pagination_main_banner",
    type: "fraction",
  },
  navigation: {
    nextEl: '.main_banner_next',
    prevEl: '.main_banner_prev',
  },
})

/* -------------------------------------------------------------------------- */
/*                                  오늘의 상품 추천                                 */
/* -------------------------------------------------------------------------- */
const todaySwiper = recommendProductsSwiper('.swiper_today','.today_next','.today_prev');

/* -------------------------------------------------------------------------- */
/*                                  할인 상품 추천                                  */
/* -------------------------------------------------------------------------- */
const saleSwiper = recommendProductsSwiper('.swiper_sale','.sale_next','.sale_prev');