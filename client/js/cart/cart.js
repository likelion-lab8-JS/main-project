import {
  disableElement,
  invisibleElement,
  visibleElement,
} from "../../lib/dom/controlElement.js";
import { getNode, getNodes } from "../../lib/dom/getNode.js";

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
