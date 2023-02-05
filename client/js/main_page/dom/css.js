import { isString } from "../utils/typeOf.js"
import { typeError } from "../error/typeError.js"

export function addClass(node, className){
  if (!isString(className)) {
    typeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }
  node.classList.add(className);
}