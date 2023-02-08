import { getNode, recommendProductsSwiper, addClass, removeClass, getNodes } from './main_page/index.js'


/* -------------------------------------------------------------------------- */
/*                                popup_beauty                                */
/* -------------------------------------------------------------------------- */
const body = getNode('body');

window.onload = function () {
  addClass(body, 'scroll_lock');
  getNode('.close_popup').onclick = function () {
    getNode('#beauty_modal').style.display = "none";
    removeClass(body, 'scroll_lock');
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
});
let mainBanners = getNodes('.slide_main_banner');
mainBanners.forEach(node => {
  if (node.classList.contains('swiper-slide-duplicate')) {
    node.tabindex = '-1';
  }
});


/* -------------------------------------------------------------------------- */
/*                                  오늘의 상품 추천                                 */
/* -------------------------------------------------------------------------- */
const todaySwiper = recommendProductsSwiper('.swiper_today','.today_next','.today_prev');
const cartModal = getNode('#cart_modal');
const btnCancel = getNode('.btn_cancel');
const recommendProductsWrapper = getNode('.recommend_products_wrapper');
let recentProductLink = getNode('.recent_product a');
const recentProducts = getNode('.recent_products');

/* cart */
recommendProductsWrapper.addEventListener('click', function(e){
  let cartButton = e.target.closest('button');
  let productDetailLink = e.target.closest('a');
  let productThumbnail = e.target.closest('a .product_img');

  if (cartButton) {
    e.preventDefault();
    addClass(cartModal, 'is-active');
    addClass(body, 'scroll_lock');
  } else {
    localStorage.setItem('thumbnail', productThumbnail.src);
    localStorage.setItem('href', productDetailLink.href);
  }
});
btnCancel.addEventListener('click', function (){
  removeClass(cartModal, 'is-active');
  removeClass(body, 'scroll_lock');
});


/* -------------------------------------------------------------------------- */
/*                                  할인 상품 추천                                  */
/* -------------------------------------------------------------------------- */
const saleSwiper = recommendProductsSwiper('.swiper_sale','.sale_next','.sale_prev');


/* -------------------------------------------------------------------------- */
/*                                   최근 본 항목                                  */
/* -------------------------------------------------------------------------- */
if (localStorage.getItem('thumbnail')) {
  recentProducts.hidden = false;
  recentProductLink.style.background = `url(${localStorage.getItem('thumbnail')}) no-repeat 0 0 / 100%`;
  recentProductLink.href = localStorage.getItem('href');
}