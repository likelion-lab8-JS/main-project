import { getNode } from "../../lib/index.js";
<<<<<<< HEAD
=======
export * from "./inquiry.js"
>>>>>>> 919dbec473e1976731875d93624538f708b42d12

// 상품 후기 게시판 내 아코디언 메뉴 기능 
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    const folded = this.parentElement.nextElementSibling;
    if (folded.style.display === "block") {
      folded.style.display = "none";
    } else {
      folded.style.display = "block";
    }
  });
}


// 상품문의 테이블 내 아코디언 메뉴 기능 
const collt = document.getElementsByClassName("collapsible_table");

for (let j = 0; j < collt.length; j++) {
  collt[j].addEventListener("click", function() {
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
const modal = getNode('.popup_modal');
const write_review = getNode('#write_review');
const reviewpopup = getNode('.review_popup_wrapper');
const inquirypopup = getNode('.inquiry_popup_wrapper');
<<<<<<< HEAD

=======
const write_inquiry = getNode('#write_inquiry');

/** 후기 작성하기 팝업 띄우기 */
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
const open_reviewpopup = function (){
  modal.style.display ='block';
  reviewpopup.style.display = 'block';
}


<<<<<<< HEAD
/** 문의하기 버튼 클릭 이벤트*/
const write_inquiry = getNode('#write_inquiry');
=======
/** 문의하기 팝업 띄우기 */
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
const open_inquirypopup = function (){
  modal.style.display ='block';
  inquirypopup.style.display = 'block';
}

write_review.addEventListener('click', open_reviewpopup);
write_inquiry.addEventListener('click', open_inquirypopup);


/** 팝업 창 닫기 버튼 클릭 이벤트 */
const cancel = document.querySelectorAll('.popup_close'); 

const quit_popup = function(){
  reviewpopup.style.display = 'none';
  inquirypopup.style.display = 'none';
  modal.style.display = 'none';
}

for (let i = 0; i < cancel.length; i++){
  cancel[i].addEventListener('click',quit_popup);
}

<<<<<<< HEAD

/** 질문글 등록 */

let template = /* html */`
<div class="notice_content folded">  
      <img class="quest_icon" src="./assets/icons/Icon/question.svg" alt=""/>
      <div class="question">
        <p>
          스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요</br>
          환불 요청합니다.
        </p>
      </div>
        <p class="written-date">  
          2022. 11. 11
        </p> 
      </div>
    </div>
`


=======
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
/** 글자수 세기 */

let rev_textarea = document.getElementById('review_text');
let inq_textarea = document.getElementById('inquiry_text');
 
let review_counter = document.querySelector('.content_length_counter');
let inquiry_counter = document.getElementById('inquiry_count')

 
const review_count = function (e){
  let content = e.target.value.length;
  review_counter.innerHTML = content + ' / 5000';
};
 
const inquiry_count = function (e){
  let content = e.target.value.length;
  inquiry_counter.innerHTML = content + ' / 5000';
};

rev_textarea.addEventListener('input', review_count);
inq_textarea.addEventListener('input', inquiry_count);


<<<<<<< HEAD
/** swiper 사용 */
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
// });
=======

>>>>>>> 919dbec473e1976731875d93624538f708b42d12
