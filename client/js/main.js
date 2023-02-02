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
const recommend_products_prev = getNode('.recommend_products_prev');
const recommend_products_next = getNode('.recommend_products_next');

const todayRecommendSwiper = new Swiper('.swiper_recommend_products', {
  slidesPerView: 4,
  slidesPerGroup : 4,
  spaceBetween: 18,
  speed: 500,
  navigation: {
    nextEl: '.recommend_products_next',
    prevEl: '.recommend_products_prev',
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
        recommend_products_prev.style.display = 'flex';
        recommend_products_next.style.display = 'flex';
      }
      if (this.realIndex === 8) {
        recommend_products_prev.style.display = 'flex';
        recommend_products_next.style.display = 'none';
      }
      if (this.realIndex === 0) {
        recommend_products_prev.style.display = 'none';
        recommend_products_next.style.display = 'flex';
      }
      // activeIndex와 realIndex의 차이..?
  }}
})