import { getNode } from "../../lib/index.js";

// 상품 후기 게시판 내 아코디언 메뉴 기능 
const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const folded = this.parentElement.nextElementSibling;
    if (folded.style.display === "block") {
      folded.style.display = "none";
    } else {
      folded.style.display = "block";
    }
  });
}


// 상품문의 테이블 내 아코디언 메뉴 기능 
const collt = document.getElementsByClassName("collapsible-table");
let j;

for (j = 0; j < collt.length; j++) {
  collt[j].addEventListener("click", function() {
    this.classList.toggle("active");
    const folded = this.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
    if (folded.style.display === "block") {
      folded.style.display = "none";
    } else {
      folded.style.display = "block";
    }
  });
}

// 버튼 클릭 시 팝업창 띄우기 & 뒷 배경 회색 & 뒷 배경 클릭 시 팝업 종료

const popuphandler = function (){
  return console.log('button clicked')
}
const write_button = getNode('write-btn');

write_button.addEventListener('click', popuphandler);