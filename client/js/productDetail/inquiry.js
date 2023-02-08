

// 문의등록 

const post_inquiry = document.getElementById('post_inquiry');
let title = document.getElementById('inquiry_title');
let content = document.getElementById('inquiry_text');
let is_Secret = document.getElementById('isSecret');

async function postInquiry(e){

  const inquiry = {
    title : title.value,
    content : content.value,
    is_Secret : is_Secret.value
  }

  fetch('http://localhost:3000/inquiry',{ 
    method:'POST', 
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inquiry)
  })
    .then((response)=>(response.json()))
    .then((result=> console.log(result)))
    .catch(err => console.error(err));

}    

post_inquiry.addEventListener('click',postInquiry);
