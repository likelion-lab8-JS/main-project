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
const today_prev = getNode('.today_prev');
const today_next = getNode('.today_next');

const todaySwiper = new Swiper('.swiper_today', {
  slidesPerView: 4,
  slidesPerGroup : 4,
  spaceBetween: 18,
  speed: 500,
  navigation: {
    nextEl: today_next,
    prevEl: today_prev,
  },
  on: {
    slideChange: function (){
      // 여기서 this가 뭘까..?
      // 함수 내에서 this는 해당 함수를 호출하기 위해 사용된 객체를 의미하는데,,
      // 그럼 on 객체인데, this 대신 on을 넣으면 제대로 기능이 동작하지 않는다..ㅜㅜ
      // ReferenceError: on is not defined

      // console.log(this);
      // V라고 정의된 object가 나옴... 어디서 튀어나온거지..

      if (this.activeIndex === 4) {
        today_prev.style.display = 'flex';
        today_next.style.display = 'flex';
      }
      if (this.realIndex === 8) {
        today_prev.style.display = 'flex';
        today_next.style.display = 'none';
      }
      if (this.realIndex === 0) {
        today_prev.style.display = 'none';
        today_next.style.display = 'flex';
      }
      // activeIndex와 realIndex의 차이..?
  }}
})

/* -------------------------------------------------------------------------- */
/*                                  할인 상품 추천                                  */
/* -------------------------------------------------------------------------- */
const sale_prev = getNode('.sale_prev');
const sale_next = getNode('.sale_next');

const saleSwiper = new Swiper('.swiper_sale', {
  slidesPerView: 4,
  slidesPerGroup : 4,
  spaceBetween: 18,
  speed: 500,
  navigation: {
    nextEl: sale_next,
    prevEl: sale_prev,
  },
  on: {
    slideChange: function (){
      if (this.activeIndex === 4) {
        sale_prev.style.display = 'flex';
        sale_next.style.display = 'flex';
      }
      if (this.realIndex === 8) {
        sale_prev.style.display = 'flex';
        sale_next.style.display = 'none';
      }
      if (this.realIndex === 0) {
        sale_prev.style.display = 'none';
        sale_next.style.display = 'flex';
      }
  }}
})