import { getNode, getNodes } from "../../lib/dom/getNode.js";
<<<<<<< HEAD

=======
import { insertLast } from "../../lib/dom/insert.js";

// 전체선택, 개별선택
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
const subCheck = getNodes("input[name='sub_check']");
const allCheck = getNodes("input[name='all_check']");

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

<<<<<<< HEAD
// 체크박스
// 1. 전체 선택
=======
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
// 상품 금액란에 총합 계산해서 넣기
function calcProductPrice(element) {
  element.innerText = `${totalProductCount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
}

calcProductPrice(productAmount);
calcProductPrice(scheduledPayment);

function showAllCheck() {
  allCheckLabel.forEach((el) => {
    el.innerText = `전체선택 (${subCheck.length}/${subCheck.length})`;
  });
}

<<<<<<< HEAD
// 전체선택 수량
showAllCheck();

=======
// 전체선택 수량 바로 보이게 하기
showAllCheck();

// 전체선택에 따른 기능구현
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
function selectAllCheckBox() {
  allCheck.forEach((el) => {
    if (el.checked === true) {
      subCheck.forEach((el) => {
        el.checked = true;
      });
      allCheck[allCheck.length - 1].checked = true;

      calcProductPrice(productAmount);
      calcProductPrice(scheduledPayment);

      showAllCheck();
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

allCheck.forEach((el) => {
  el.addEventListener("click", selectAllCheckBox);
});

<<<<<<< HEAD
// 2. 개별선택
=======
// 개별선택에 따른 기능 구현
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
function countCheckBox() {
  let subCheckCount = 0;
  function showSubCheckLabel() {
    allCheckLabel.forEach((el) => {
      el.innerText = `전체선택 (${subCheckCount}/${subCheck.length})`;
    });
  }

<<<<<<< HEAD
=======
  // 개별선택에 따른 가격 계산
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
  function calcSubCheckPrice() {
    const subProductPrice =
      +productPrice.replace(/[^0-9]/g, "") * subCheckCount;
    const changeInnerText = `${subProductPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;

    productAmount.innerText = changeInnerText;
    scheduledPayment.innerText = changeInnerText;
  }

  subCheck.forEach((el) => {
    if (el.checked === true) {
      subCheckCount++;
      calcSubCheckPrice();
    } else {
      calcSubCheckPrice();
    }

    if (subCheck.length === subCheckCount) {
      allCheck.forEach((item) => {
        item.checked = true;

        calcProductPrice(productAmount);
        calcProductPrice(scheduledPayment);
      });
    } else {
      allCheck.forEach((item) => {
        item.checked = false;
      });
    }
  });
  showSubCheckLabel();
}

subCheck.forEach((el) => {
  el.addEventListener("click", countCheckBox);
});

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

<<<<<<< HEAD
// 클릭시 수량 증가
=======
// 증가버튼 클릭시 수량, 가격 증가
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
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
<<<<<<< HEAD

  // productAmount.innerText = totalPrice + totalProductCount;
  // scheduledPayment.innerText = totalPrice + totalProductCount;
  // console.log(totalPrice + totalProductCount);
=======
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
}

plusBtn.forEach((el) => {
  el.addEventListener("click", getPlusCount);
});

<<<<<<< HEAD
=======
// 감소 버튼 클릭시 수량, 가격 감소
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
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
<<<<<<< HEAD
=======

// 데이터로 불러와서 장바구니 목록 넣기
/*const createProductBox = ({ id = "", name = "", price = "" } = {}) => {
  return `
  <li class="product_list">
                    <input
                      type="checkbox"
                      id="${id}"
                      name="sub_check"
                      checked
                    />
                    <label for="${id}" class="a11y_hidden">선택하기</label>

                    <a href="#" class="product_img">
                      <img
                        src="./assets/thumbnail/product01.webp"
                        alt="[풀무원]탱탱쫄면(4개입)"
                      />
                    </a>

                    <div class="product_name">
                      <a href="#">${name}</a>
                    </div>

                    <div class="count_box">
                      <button class="minus_btn">
                        <img
                          src="./assets/icons/cart/minus.svg"
                          alt="수량 내리기"
                        />
                      </button>

                      <div class="count">1</div>

                      <button class="plus_btn" id="btn_1">
                        <img
                          src="./assets/icons/cart/plus.svg"
                          alt="수량 올리기"
                        />
                      </button>
                    </div>
                    <!-- count_box -->

                    <p class="product_price">${price}원</p>

                    <button class="delete_btn">
                      <img
                        src="./assets/icons/cart/cancle.svg"
                        alt="상품 삭제하기"
                      />
                    </button>
                  </li>
  `;
};

const renderProduct = (target, data) => {
  insertLast(target, createProductBox(data));
};

const productBox = getNode(".product_list_box");

async function render() {
  // console.log(productBox);
  let response = await fetch("http://localhost:3000/products");
  let product = await response.json();

  product.forEach((el) => {
    renderProduct(productBox, el);
  });
}

render();
*/
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
