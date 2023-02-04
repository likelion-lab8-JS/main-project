import { getNode, getNodes } from "../../lib/dom/getNode.js";

const subCheck = getNodes("#sub_check");
const allCheck = getNodes("#all_check");

// 수량 증감 버튼 구현
const plusBtn = getNodes(".plus_btn");
const minusBtn = getNodes(".minus_btn");
const productPrice = getNode(".product_price").innerText;
const productAmount = getNode(".product_amount .price");
const scheduledPayment = getNode(".scheduled_payment .price");
// 상품금액 합산
let totalProductCount = +productPrice.replace(/[^0-9]/g, "") * subCheck.length;
// 전체선택시 상품개수 체크
const allCheckLabel = getNodes(".select_menu > label");

// 체크박스
// 1. 전체 선택
// 상품 금액란에 총합 계산해서 넣기
productAmount.innerText = `${totalProductCount
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;

// 구매결정 금액란에 총합 계산해서 넣기
scheduledPayment.innerText = `${totalProductCount
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;

// 전체선택 수량
allCheckLabel.forEach((el) => {
  el.innerText = `전체선택 (${subCheck.length}/${subCheck.length})`;
});

for (let i = 0; i < allCheck.length; i++) {
  allCheck[i].addEventListener("click", function () {
    if (allCheck[i].checked === true) {
      subCheck.forEach((item) => {
        item.checked = true;
      });
      allCheck[allCheck.length - 1].checked = true;

      productAmount.innerText = `${totalProductCount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;

      scheduledPayment.innerText = `${totalProductCount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;

      allCheckLabel.forEach((el) => {
        el.innerText = `전체선택 (${subCheck.length}/${subCheck.length})`;
      });
    } else {
      subCheck.forEach((item) => {
        item.checked = false;
      });
      allCheck[allCheck.length - 1].checked = false;

      // 상품금액 모두 초기화
      productAmount.innerText = `0원`;
      scheduledPayment.innerText = `0원`;

      allCheckLabel.forEach((el) => {
        el.innerText = `전체선택 (0/${subCheck.length})`;
      });
    }
  });
}

// 2. 개별선택
let subCheckCount = 0;

for (let i = 0; i < subCheck.length; i++) {
  subCheck[i].addEventListener("click", function () {
    if (subCheck[i].checked === true) {
      subCheckCount++;

      allCheckLabel.forEach((el) => {
        el.innerText = `전체선택 (${subCheckCount}/${subCheck.length})`;
      });
    } else {
      subCheckCount--;
      allCheckLabel.forEach((el) => {
        el.innerText = `전체선택 (${subCheckCount}/${subCheck.length})`;
      });
    }

    // 개별선택 개수와 개별선택 길이가 같으면 전체선택, 아니면 전체선택 해제
    if (subCheck.length === subCheckCount) {
      allCheck.forEach((item) => {
        item.checked = true;
      });
    } else {
      allCheck.forEach((item) => {
        item.checked = false;
      });
    }
  });
}

// 리스트 클릭시 아코디언메뉴 구현
const list = getNodes(".product_list_box");
const listTitle = getNodes(".list_title");
const arrowBtn = getNodes(".close_btn > img");

for (let i = 0; i < listTitle.length; i++) {
  listTitle[i].addEventListener("click", function (e) {
    let closeBtn = e.target.closest(".list_title");
    if (!closeBtn) return;

    arrowBtn[i].classList.toggle("under_arrow");

    list[i].classList.toggle("active");
  });
}

// 클릭시 수량 증가
function getPlusCount(e) {
  let productCount = e.target.previousElementSibling;
  if (!productCount) return;

  let num = +productCount.innerText;

  if (plusBtn) {
    num++;
  }

  productCount.innerText = num;

  if (num !== 1) {
    const getImgNode = e.target.closest(".plus_btn");
    getImgNode.classList.add("active");
  }

  // 증가에 따라 가격 변동
  const originalPrice = e.target.parentElement.nextElementSibling;
  const price = +productPrice.replace(/[^0-9]/g, "");

  let totalPrice = price * num;

  originalPrice.innerText = `${totalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
}

plusBtn.forEach((el) => {
  el.addEventListener("click", getPlusCount);
});

function getMinusCount(e) {
  let productCount = e.target.nextElementSibling;
  if (!productCount) return;

  let num = +productCount.innerText;
  if (num === 1) return;

  if (plusBtn) {
    num--;
  }

  productCount.innerText = num;

  if (num !== 1) {
    const getImgNode = e.target.closest(".minus_btn");
    getImgNode.classList.add("active");
  }

  // 1이 됐을 때 더이상 내려가지 않도록 막음
  if (num === 1) {
    const getImgNode = e.target.closest(".minus_btn");
    getImgNode.classList.remove("active");
  }

  // 감소에 따라 가격 변동
  const originalPrice = e.target.parentElement.nextElementSibling;
  const price = +productPrice.replace(/[^0-9]/g, "");

  let totalPrice = price * num;

  originalPrice.innerText = `${totalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
}

minusBtn.forEach((el) => {
  el.addEventListener("click", getMinusCount);
});
