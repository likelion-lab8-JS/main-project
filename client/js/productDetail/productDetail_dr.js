import { getNode, getNodes } from "../../lib/index.js";

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

/** 후기 작성하기 버튼 클릭 이벤트 */
const modal = getNode('.popup-modal');
const write_review = getNode('#write-review');
const reviewpopup = getNode('.review-popup-wrapper');
const inquirypopup = getNode('.inquiry-popup-wrapper');

const open_reviewpopup = function (){
  modal.style.display ='block';
  reviewpopup.style.display = 'block';
}
write_review.addEventListener('click', open_reviewpopup);


/** 문의하기 버튼 클릭 이벤트*/
const write_inquiry = getNode('#write-inquiry');
const open_inquirypopup = function (){
  modal.style.display ='block';
  inquirypopup.style.display = 'block';
}
write_inquiry.addEventListener('click', open_inquirypopup);

/** 팝업 창 닫기 버튼 클릭 이벤트 */
const close_review = getNode('.close-review');
const close_inquiry = getNode('.close-inquiry');
const cancel_review = getNode('.cancel-review');
const cancel_inquiry = getNode('.cancel-inquiry');

const close_popup = function(){
  console.log('hit');
  reviewpopup.style.display = 'none';
  inquirypopup.style.display = 'none';
  modal.style.display = 'none';
}

close_inquiry.addEventListener('click', close_popup);
close_review.addEventListener('click', close_popup);
cancel_inquiry.addEventListener('click', close_popup);
cancel_review.addEventListener('click', close_popup);