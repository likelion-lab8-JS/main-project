import { getNode, recommendProductsSwiper, addClass, removeClass } from './main_page/index.js'


/* -------------------------------------------------------------------------- */
/*                                popup_beauty                                */
/* -------------------------------------------------------------------------- */
window.onload = function () {
  getNode('.close_popup').onclick = function () {
      getNode('#beauty_modal').style.display = "none"
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
const cartModal = getNode('#cart_modal');
const cartIcon = getNode('.cart_icon');
const body = getNode('body');
const btnCancel = getNode('.btn_cancel');

/* cart */
cartIcon.addEventListener('click', (e)=>{
  e.preventDefault();
  addClass(cartModal, 'is-active');
  addClass(body, 'scroll_lock');
});
btnCancel.addEventListener('click', function (){
  removeClass(cartModal, 'is-active');
  removeClass(body, 'scroll_lock');
})


/* -------------------------------------------------------------------------- */
/*                                  할인 상품 추천                                  */
/* -------------------------------------------------------------------------- */
const saleSwiper = recommendProductsSwiper('.swiper_sale','.sale_next','.sale_prev');