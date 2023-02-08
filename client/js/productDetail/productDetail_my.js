import { getNode } from "../../lib/dom/index.js";

/*------------------------------[ 장바구니에 얼마나 수량을 담을지 결정하는 버튼과 관련된 이벤트 함수 ]------------------------------ */

// - 버튼을 누르면 선택한 수량이 줄어든다
function clickMinusButton() { 
  // 현재 상품 개수를 가지고 있는 노드를 가져옴
  let productNumNode = document.querySelector('.number_of_product span');
  // let productNumNode = getNode('.number_of_product span');
  // 노드에서 텍스트만 가져옴
  let productNum = +(productNumNode.textContent); 
  // 만약에 현재 값이 1이라면 더이상 값이 줄어들 수 없음 => return처리하기
  if(productNum == 1) {
    return;
  }
  // 값을 줄어들게 함
  productNum = productNum - 1;
  // 줄어든 값이 1일 경우, 마이너스 버튼을 light색으로 바꿈
  if(productNum == 1) {
    let getImgNode = document.querySelector('.minus_amount img');
    getImgNode.src="./assets/icons/detail_miyoung/minus_light.svg";
    getImgNode.style.cursor = "default"; // 커서 모양 변동
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

// +버튼을 누르면 선택한 수량이 늘어난다
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
    getImgNode.style.cursor = "pointer"; // 커서 모양 변동
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


/*------------------------------[ 사용자가 후기를 등록할때마다 네비게이션바의 후기개수 늘어나기 ]------------------------------*/

// 참고로 동률님과 코드를 합치기 전에 짠거라서 나중에 합치면 수정이 필요할 수도 있음
// 동률님 코드: <button class="btn_submit">등록</button>
function clickSubmitButton() {
  // 네비게이션바의 후기 버튼 노드 가져오기
  const getNumNode = document.querySelector('.btn_product_review span');
  // 네비게이션바의 후기에서 괄호안의 숫자만 빼오기
  let reviewNum = +((getNumNode.textContent).replace(/[^0-9]/g,"")); // (숫자)에서 숫자만 추출
  // 등록하면 후기 개수 하나 증가
  reviewNum = reviewNum + 1; 
  // 바뀐 후기 개수를 네비게이션바에 업데이트 하기 
  getNumNode.textContent = `(${reviewNum})`;
}
const getSubmitButton = document.querySelector('.btn_submit');
getSubmitButton.addEventListener('click', clickSubmitButton);


/*------------------------------[ 네비게이션바 > 각 영역으로 화면 초점 이동 ]------------------------------*/
function goToScrollDescription() {
  let location = document.querySelector('.description').offsetTop;
  window.scrollTo({
    top: location-72-71,
    behavior: 'smooth'
  });
}
const btnDescription = getNode('.btn_product_description');
btnDescription.addEventListener('click', goToScrollDescription);

function goToScrollDetail() {
  let location = document.querySelector('.detail_information').offsetTop;
  window.scrollTo({
    top: location,
    behavior: 'smooth'
  });
}
const btnDetail = getNode('.btn_detail_information');
btnDetail.addEventListener('click', goToScrollDetail);

function goToScrollReview() {
  let location = document.querySelector('.review_wrapper').offsetTop;
  window.scrollTo({
    top: location,
    behavior: 'smooth'
  });
}
const btnReview = getNode('.btn_product_review');
btnReview.addEventListener('click', goToScrollReview);

function goToScrollInquiry() {
  let location = document.querySelector('.inquiry_wrapper').offsetTop;
  window.scrollTo({
    top: location,
    behavior: 'smooth'
  });
}
const btnInquiry = getNode('.btn_product_inquiry');
btnInquiry.addEventListener('click', goToScrollInquiry);

// [재확인 필요] 동률님의 리팩토링된 클래스명 확인 필요
// 동률님 코드와 합치면, HTML파일에서 navigation의 3,4번째 버튼에 onclick연결해줘야 함
// onclick="goToScroll('클래스명')"

/*------------------------------[ header를 넘어가면 작은 메뉴바 위치서부터 상단에 고정 ]------------------------------*/
window.addEventListener('scroll', function() {
  // 브라우저에서 얼마나 스크롤 했는지 posY에 저장
  const posY = this.window.pageYOffset;
  // 현재 보이는 화면 기준으로 top좌표
  const topOfDetailMain = this.document.querySelector('.productDetail_main').getBoundingClientRect().top;
  const posOfDetailMain = posY + topOfDetailMain; // productDetail_main의 절대위치 저장해놓기
  let getSmallMenu = document.querySelector('.small_header_nav');
  if(posY < posOfDetailMain) {
    getSmallMenu.classList.add("a11y_hidden");
  } else {
    getSmallMenu.classList.remove("a11y_hidden");
  }
});




/* --------------------------------- [ 네비게이션바 > 화면초점위치에 따라 버튼의 css스타일링 바뀌기 ] ---------------------------------- */

window.addEventListener('scroll', function() {
  const posY = window.pageYOffset; // 브라우저에서 얼마나 스크롤 했지
  const descriptionPart = document.querySelector('.description').getBoundingClientRect().top; // 현재 보이는 화면 기준으로 top좌표
  const detailPart = document.querySelector('.detail_information').getBoundingClientRect().top;
  const reviewPart = document.querySelector('.review_wrapper').getBoundingClientRect().top;
  const inquiryPart = document.querySelector('.inquiry_wrapper').getBoundingClientRect().top;

  // 절대 위치 구하기
  const descriptionTop = posY + descriptionPart;
  const detailTop = posY + detailPart;
  const reviewTop = posY + reviewPart;
  const inquiryTop = posY + inquiryPart;
  
  // 버튼 저장
  let descriptionBtn = document.querySelector('.btn_product_description');
  let detailBtn = document.querySelector('.btn_detail_information');
  let reviewBtn = document.querySelector('.btn_product_review');
  let inquiryBtn = document.querySelector('.btn_product_inquiry');

  if(posY < descriptionTop) {
    // 버튼 모두 회색
    //console.log("아무것도 아님");
    descriptionBtn.classList.remove("btn_is_focus");
    detailBtn.classList.remove("btn_is_focus");
    reviewBtn.classList.remove("btn_is_focus");
    inquiryBtn.classList.remove("btn_is_focus");
  } else if(posY >= descriptionTop && posY < detailTop) {
    //console.log("여기는 상품설명");
    descriptionBtn.classList.add("btn_is_focus");
    detailBtn.classList.remove("btn_is_focus");
    reviewBtn.classList.remove("btn_is_focus");
    inquiryBtn.classList.remove("btn_is_focus");
  } else if(posY >= detailTop && posY < reviewTop) {
    //console.log("여기는 디테일");
    descriptionBtn.classList.remove("btn_is_focus");
    detailBtn.classList.add("btn_is_focus");
    reviewBtn.classList.remove("btn_is_focus");
    inquiryBtn.classList.remove("btn_is_focus");
  } else if(posY >= reviewTop && posY < inquiryTop) {
    //console.log("여기는 리뷰");
    descriptionBtn.classList.remove("btn_is_focus");
    detailBtn.classList.remove("btn_is_focus");
    reviewBtn.classList.add("btn_is_focus");
    inquiryBtn.classList.remove("btn_is_focus");
  } else {
    //console.log("여기는 문의");
    descriptionBtn.classList.remove("btn_is_focus");
    detailBtn.classList.remove("btn_is_focus");
    reviewBtn.classList.remove("btn_is_focus");
    inquiryBtn.classList.add("btn_is_focus");
  } 
});

/* --------------------------------- [ 장바구니 담기 버튼 클릭 > header의 장바구니 아이콘에 말풍선 띄우고 없애기 ] ---------------------------------- */

const pushCartBtn = document.querySelector('.push_cart'); // 장바구니 담기 버튼
const modalCart = document.querySelector('.modal_cart'); // 모달창 노드 가져오기

function clickPushCartBtn() {
  modalCart.classList.remove("a11y_hidden"); // 화면에 말풍선이 보이게 한다
  setTimeout(function() {
    modalCart.classList.add("a11y_hidden"); // 특정시간후에 말풍선이 사라진다
  }, 1300);
}

// 장바구니 담기 버튼을 누를때마다 이벤트 발생
pushCartBtn.addEventListener('click', clickPushCartBtn);

