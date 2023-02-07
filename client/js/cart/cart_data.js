import { getNode } from "../../lib/dom/getNode.js";
import { insertLast } from "../../lib/dom/insert.js";

// 데이터로 불러와서 장바구니 목록 넣기
const createProductBox = ({
  id = "",
  name = "",
  price = "",
  stock = "",
} = {}) => {
  return /* html */ `
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
