import { addClass, css, removeClass } from "../../lib/dom/css.js";
import { getNode, getNodes } from "../../lib/dom/getNode.js";

const categoryTitle = getNodes(".top_menu");
const categoryList = getNodes(".list_wrapper");
const img = getNodes(".toggle_btn > svg");
const list = getNodes(".category_list");
const checked = getNodes(".check_btn");
const resetBtn = getNode(".reset_btn");

function reset() {
  resetBtn.style.color = null;
  //removeClass(".none_btn", "none_btn");

  checked.forEach((checkbox) => {
    checkbox.classList.remove("none_btn");
  });
}

resetBtn.addEventListener("click", reset);

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (e) {
    e.preventDefault();
    let iconBtn = e.target.closest(".category_list > a");
    if (!iconBtn) return;

    checked[i].classList.toggle("none_btn");

    css(resetBtn, "color", "#333");
  });
}

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener("click", function (e) {
    let toggleBtn = e.target.closest(".toggle_btn");
    if (!toggleBtn) return;

    img[i].classList.toggle("active");

    if (categoryList[i].style.maxHeight) {
      categoryList[i].style.maxHeight = null;
    } else {
      categoryList[i].style.maxHeight = categoryList[i].scrollHeight + "px";
    }
  });
}
