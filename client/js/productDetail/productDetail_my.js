

function clickMinusButton() { // -버튼을 누르면 선택한 수량이 줄어든다
  // 현재 상품 개수를 가지고 있는 노드 가져옴
  let productNumNode = document.querySelector('.number_of_product span');
  // 노드에서 텍스트만 가져옴
  let productNum = +(productNumNode.textContent); 
  // 값을 줄어들게 한다
  productNum = productNum - 1;
  // 값을 바꿔낀다
  productNumNode.textContent = `${productNum}`;
}

function clickPlusButton() {
  // 현재 상품 개수를 가지고 있는 노드 가져옴
  let productNumNode = document.querySelector('.number_of_product span');
  // 노드에서 텍스트만 가져옴
  let productNum = +(productNumNode.textContent);
  // 값을 증가하게 한다
  productNum = productNum + 1;
  // 값을 바꿔낀다
  productNumNode.textContent = `${productNum}`;
  // 총 값을 보여주는 노드 가져옴
  let totalPrice = document.querySelector('.total_price_2');
  // 단가를 가져옴
  let onePrice = document.querySelector('.total_price_1');
  onePrice = +((onePrice.textContent).replace(/[^0-9]/g,"")); // 숫자만 추출
  // 새로운 값을 계산
  let newPrice = onePrice*productNum;
  // 값 업데이트
  totalPrice.textContent = `${newPrice}`;
}

const minusButton = document.querySelector('.minus_amount');
minusButton.addEventListener('click', clickMinusButton);

const plusButton = document.querySelector('.plus_amount');
plusButton.addEventListener('click', clickPlusButton);


// console.log(minusButton);


