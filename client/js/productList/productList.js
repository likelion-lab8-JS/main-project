import { css, removeClass, toggleClass } from "../../lib/dom/css.js";
import { getNode, getNodes } from "../../lib/dom/getNode.js";

const categoryTitle = getNodes(".top_menu");
const categoryList = getNodes(".list_wrapper");
const buttonImg = getNodes(".toggle_button > img");
const list = getNodes(".category_list");
const checked = getNodes(".check_button");
const resetButton = getNode(".reset_button");

function resetCategoryList() {
  resetButton.style.color = null;

  checked.forEach((checkbox) => {
    removeClass(checkbox, "none_button");
  });
}

resetButton.addEventListener("click", resetCategoryList);

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (e) {
    e.preventDefault();
    let iconButton = e.target.closest(".category_list");
    if (!iconButton) return;

    toggleClass(checked[i], "none_button");

    css(resetButton, "color", "#333");
  });
}

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener("click", function (e) {
    let toggleButton = e.target.closest(".toggle_button");
    if (!toggleButton) return;

    toggleClass(buttonImg[i], "active");

    if (categoryList[i].style.maxHeight) {
      categoryList[i].style.maxHeight = null;
    } else {
      categoryList[i].style.maxHeight = categoryList[i].scrollHeight + "px";
    }
  });
}

// function toggleCategory(e) {
//   let toggleButton = e.target.closest(".toggle_button");
//   if (!toggleButton) return;

//   img.forEach((el) => {
//     el.classList.toggle("active");
//   });

//   categoryList.forEach((el) => {
//     if (el.style.maxHeight) {
//       el.style.maxHeight = null;
//     } else {
//       el.style.maxHeight = el.scrollHeight + "px";
//     }
//   });
// }

// categoryTitle.forEach((el) => {
//   el.addEventListener("click", toggleCategory);
// });
