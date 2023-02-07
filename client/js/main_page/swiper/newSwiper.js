import { getNode } from "../dom/getNode.js";
import { isString } from "../utils/typeOf.js";
import { typeError } from "../error/typeError.js"


/* 추천 상품 swiper */
export function recommendProductsSwiper(swiper,next,prev){
  if (!(isString(swiper) || isString(next) || isString(prev))){
    typeError('recommendProductsSwiper 함수의 인자는 모두 문자 타입 이여야 합니다.');
  }
  return new Swiper(swiper, {
  slidesPerView: 4,
  slidesPerGroup : 4,
  spaceBetween: 18,
  speed: 500,
  navigation: {
    nextEl: next,
    prevEl: prev,
  },
});
}