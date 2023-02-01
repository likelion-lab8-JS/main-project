function clickMinusButton() { // -버튼을 누르면 선택한 수량이 줄어든다
  // 현재 상품 개수를 가지고 있는 노드 가져옴
  let productNumNode = document.querySelector('.number_of_product span');
  // 노드에서 텍스트만 가져옴
  let productNum = +(productNumNode.textContent); 
  // 만약에 현재 값이 1이라면 더이상 값이 줄어들 수 없음 => return처리하기
  if(productNum == 1) {
    return;
  }
  // 값을 줄어들게 한다
  productNum = productNum - 1;
  // 줄어든 값이 1일 경우, 마이너스 버튼을 light색으로 바꿈
  if(productNum == 1) {
    let getImgNode = document.querySelector('.minus_amount img');
    getImgNode.src="./assets/icons/detail_miyoung/minus_light.svg";
  }
  // 값을 바꿔낀다
  productNumNode.textContent = `${productNum}`;
  // 총 값을 보여주는 노드 가져옴
  let totalPrice = document.querySelector('.total_price_2');
  // 단가를 가져옴
  let onePrice = document.querySelector('.total_price_1');
  onePrice = +((onePrice.textContent).replace(/[^0-9]/g,"")); // 숫자만 추출
  // 새로운 값을 계산
  let newPrice = onePrice*productNum;
  // 3자리마다 콤마 붙혀서 문자열로 저장
  newPrice = newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // 값 업데이트(콤마 붙힌 상태로)
  totalPrice.textContent = newPrice;
}

function clickPlusButton() {
  // 현재 상품 개수를 가지고 있는 노드 가져옴
  let productNumNode = document.querySelector('.number_of_product span');
  // 노드에서 텍스트만 가져옴
  let productNum = +(productNumNode.textContent);
  // 값을 증가하게 한다
  productNum = productNum + 1;
  // 1이 아닐경우, 마이너스 버튼을 dark색으로 바꿈
  if(productNum != 1) {
    let getImgNode = document.querySelector('.minus_amount img');
    getImgNode.src="./assets/icons/detail_miyoung/minus_dark.svg";
  }
  // 값을 바꿔낀다
  productNumNode.textContent = `${productNum}`;
  // 총 값을 보여주는 노드 가져옴
  let totalPrice = document.querySelector('.total_price_2');
  // 단가를 가져옴
  let onePrice = document.querySelector('.total_price_1');
  onePrice = +((onePrice.textContent).replace(/[^0-9]/g,"")); // 숫자만 추출
  // 새로운 값을 계산
  let newPrice = onePrice*productNum;
  // 3자리마다 콤마 붙혀서 문자열로 저장
  newPrice = newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // 값 업데이트(콤마 붙힌 상태로)
  totalPrice.textContent = newPrice;
}

const minusButton = document.querySelector('.minus_amount');
minusButton.addEventListener('click', clickMinusButton);

const plusButton = document.querySelector('.plus_amount');
plusButton.addEventListener('click', clickPlusButton);


//////////////////////////화면 초점 이동//////////////////////////
function goToScroll(name) {
  let location = document.querySelector("."+name).offsetTop;
  window.scrollTo({
    top: location,
    behavior: 'smooth'
  });
}

//  [참고] 동률님 코드와 합치면,
//  navigation의 3,4번째 버튼에
//  onclick연결해줘야 함



