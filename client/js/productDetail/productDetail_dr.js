import { getNode } from "../../lib/index.js";

// 상품 후기 게시판 내 아코디언 메뉴 기능 
const coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
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


for (let j = 0; j < collt.length; j++) {
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

const write_review = getNode('#write-review');
const open_reviewpopup = function (){
  const reviewpopup = getNode('.review-popup-wrapper');
  reviewpopup.style.display = 'block';
}


const write_inquiry = getNode('#write-inquiry');
const open_inquirypopup = function (){
  const reviewpopup = getNode('.inquiry-popup-wrapper');
  reviewpopup.style.display = 'block';
}


write_review.addEventListener('click', open_reviewpopup);
write_inquiry.addEventListener('click', open_inquirypopup);
// 