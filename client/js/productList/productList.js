import { getNodes } from "../../lib/dom/getNode.js";

const categoryTitle = getNodes(".top_menu");

const categoryList = getNodes(".list_wrapper");
const toggleBtn = getNodes(".toggle_btn > svg");

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener("click", function () {
    toggleBtn[i].classList.toggle("active");

    if (categoryList[i].style.maxHeight) {
      categoryList[i].style.maxHeight = null;
    } else {
      categoryList[i].style.maxHeight = categoryList[i].scrollHeight + "px";
    }
  });
}
