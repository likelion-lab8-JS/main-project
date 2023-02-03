import { getNodes } from "../../lib/dom/getNode.js";

const list = getNodes(".product_list_box");
const listTitle = getNodes(".list_title");
const arrowBtn = getNodes(".close_btn > img");
const subCheck = getNodes("#sub_check");
const allCheck = getNodes("#all_check");

// 전체 선택
for (let i = 0; i < allCheck.length; i++) {
  allCheck[i].addEventListener("click", function () {
    if (allCheck[i].checked === true) {
      subCheck.forEach((item) => {
        item.checked = true;
      });
      allCheck[allCheck.length - 1].checked = true;
    } else {
      subCheck.forEach((item) => {
        item.checked = false;
      });
      allCheck[allCheck.length - 1].checked = false;
    }
  });
}

// 개별선택
for (let i = 0; i < subCheck.length; i++) {
  subCheck[i].addEventListener("click", function () {
    if (subCheck[i].checked === subCheck.length) {
      allCheck.forEach((el) => {
        el.checked = true;
      });
    } else {
      allCheck.forEach((el) => {
        el.checked = false;
      });
    }
  });
}

// 전체선택 구현하기
// for (let i = 0; i < checkBox.length; i++) {
//   checkBox[i].addEventListener("click", function () {
//     checkBox[i].classList.add("on");

//     subCheck.forEach((item) => {
//       item.classList.add("on");
//     });
//     checkBox[checkBox.length - 1].classList.add("on");
//   });
// }

// // 개별선택 구현하기
// for (let i = 0; i < subCheck.length; i++) {
//   subCheck[i].addEventListener("click", function () {
//     subCheck[i].classList.add("on");
//   });
// }

for (let i = 0; i < listTitle.length; i++) {
  listTitle[i].addEventListener("click", function (e) {
    let closeBtn = e.target.closest(".list_title");
    if (!closeBtn) return;

    arrowBtn[i].classList.toggle("under_arrow");

    list[i].classList.toggle("active");
  });
}
