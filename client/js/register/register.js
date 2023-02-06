/* 회원 정보 (value 값 저장 할 변수) */
let id = document.getElementById("id");
let password = document.getElementById("password");
let password_check = document.getElementById("password_check");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let sub_address = document.getElementById("sub_address");
let male = document.getElementById("male");
let female = document.getElementById("female");
let nocheck = document.getElementById("nocheck");
let today = new Date();
let year = document.getElementById("birth_year");
let year_now = today.getFullYear();
let month = document.getElementById("birth_month");
let day = document.getElementById("birth_day");
let recommend = document.getElementById("recommend");
let event = document.getElementById("event");

/* 정규 표현식 */
let id_essential = /^[A-Za-z0-9]{4,20}$/
let password_essential = /^[a-zA-Z0-9][!@#$%^*+_=()/<>?-]{8,20}$/;
let email_essential = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
let phone_essential = /^[0-9]*$/
let year_essential = /^[0-9]/
let month_essential = /^[0-9]/
let day_essential = /^[0-9]/

/* validation 변수 저장 */
let id_validation = document.getElementById("id_validation");
let password_validation = document.getElementById("password_validation");
let password_length = document.getElementById("password_length");
let password_retry = document.getElementById("password_retry");
let password_same = document.getElementById("password_same");
let name_validation = document.getElementById("name_validation");
let email_validation = document.getElementById("email_validation");
let email_match = document.getElementById("email_match");
let phone_validation = document.getElementById("phone_validation");
let year_validation = document.getElementById("year_validation");
let year_available = document.getElementById("year_available");
let month_validation = document.getElementById("month_validation");
let month_available = document.getElementById("month_available");
let day_validation = document.getElementById("day_validation");
let day_available = document.getElementById("day_available");

/* button 변수 저장 */
let id_overlap = document.getElementById("id_overlap");
let email_overlap = document.getElementById("email_overlap");
let phone_overlap = document.getElementById("phone_overlap");
let address_search = document.getElementById("address_search");
let address_research = document.getElementById("address_research");
let submit = document.getElementById("register_submit");

/* 추천인, 이벤트 변수 저장 */
let add_recommend = document.querySelector(".register.recommend");
let add_event = document.querySelector(".register.event");

/* 이용 약관 변수 */
let use = document.querySelector(".terms_check #terms_use");
let privacy = document.getElementById("terms_privacy");
let age = document.getElementById("terms_age");

/* 체크 박스 변수 */
let check_all = document.querySelector(".terms_all input");
let check = document.querySelectorAll(".terms_check input");

id.addEventListener("keyup", event_id);
id.addEventListener("keyup", submit_able);
password.addEventListener("keyup", event_password);
password_check.addEventListener("keyup", event_password_check);
name.addEventListener("keyup", event_name);
email.addEventListener("keyup",event_email);
phone.addEventListener("keyup",event_phone);
year.addEventListener("keyup",event_year);
month.addEventListener("keyup",event_month);
day.addEventListener("keyup",event_day);

/* 제출 버튼 활성화 */

function event_id() {
	if (id.value == "" || !id_essential.test(id.value)) {
		id_validation.classList.add("is_active");
		id_overlap.disabled = true;
	} else {
		id_validation.classList.remove("is_active");
		id_overlap.disabled = false;
	}
	submit_able();
}

function event_password() {
	if (password.value == "") {
		password_validation.classList.add("is_active");
		password_length.classList.remove("essential");
	} else if (password.value.length < 8 || password_essential.test(password.value)) {
		password_validation.classList.remove("is_active");
		password_length.classList.add("essential");
	} else {
		password_validation.classList.remove("is_active");
		password_length.classList.remove("essential");
	}
	submit_able();
}


function event_password_check() {
	if (password_check.value == "") {
		password_retry.classList.add("is_active");
		password_same.classList.remove("essential");
	} else if (password_check.value !== password.value) {
		password_retry.classList.remove("is_active");
		password_same.classList.add("essential");
	} else {
		password_retry.classList.remove("is_active");
		password_same.classList.remove("essential");
	}
	submit_able();
}



function event_name() {
	if (name.value == "") {
		name_validation.classList.add("is_active");
	} else {
		name_validation.classList.remove("is_active");
	}
	submit_able();
}


function event_email() {
	if (email.value == "") {
		email_validation.classList.add("is_active");
		email_match.classList.remove("essential");
		email_overlap.disabled = true;
	} else if (email.value !== "" && !email_essential.test(email.value)) {
		email_validation.classList.remove("is_active");
		email_match.classList.add("essential");
		email_overlap.disabled = true;
	} else {
		email_validation.classList.remove("is_active");
		email_match.classList.remove("essential");
		email_overlap.disabled = false;
	}
	submit_able();
}


function event_phone() {
	if (phone.value == "" || !phone_essential.test(phone.value) === true) {
		phone_validation.classList.add("is_active");
		phone_overlap.disabled = true;
	} else {
		phone_validation.classList.remove("is_active");
		phone_overlap.disabled = false;
	}
	submit_able();
}


/* 다음 주소 연동 */
const kakao_address = function () {
	new daum.Postcode({
		oncomplete: function (data) {
			//선택시 입력값 세팅
			document.getElementById("address").value = data.address; // 주소 넣기
			submit_able();
			document.querySelector(".address_wrap").classList.add("none");
			document.querySelector(".address_detail").classList.remove("none");
			document.getElementById("sub_address").focus(); //상세입력 포커싱
		},
	}).open();
}

/* 주소검색 버튼 눌렀을 때 */
address_search.addEventListener("click", function (){
	kakao_address();
});

/* 재검색 눌렀을 때 */
address_research.addEventListener("click", function () {
	document.querySelector(".address_wrap").classList.remove("none");
	document.querySelector(".address_detail").classList.add("none");
	kakao_address();
});

/* 출생 연도 */

function event_year() {
	if (year.value.length < 4) {
		year_validation.classList.add("is_active");
		year_available.classList.remove("is_active");
	} else if (year.value.length == 4 && year.value < 1900 || year.value > year_now) {
		year_validation.classList.remove("is_active");
		year_available.classList.add("is_active");
	} else {
		year_validation.classList.remove("is_active");
		year_available.classList.remove("is_active");
	}
}


/* 출생 월 */
function event_month() {
	if (month.value == "") {
		month_validation.classList.add("is_active");
		month_available.classList.remove("is_active");
	} else if (month.value < 1 || month.value > 12) {
		month_validation.classList.remove("is_active");
		month_available.classList.add("is_active");
	} else {
		month_validation.classList.remove("is_active");
		month_available.classList.remove("is_active");
	}
}
/* 출생 날 */

function event_day() {
	if (day.value == "") {
		day_validation.classList.add("is_active");
		day_available.classList.remove("is_active");
	} else if (day.value < 1 || day.value > 31) {
		day_validation.classList.remove("is_active");
		day_available.classList.add("is_active");
	} else {
		day_validation.classList.remove("is_active");
		day_available.classList.remove("is_active");
	}
}
/* 추천인, 이벤트명 */

const add = function () {

	let add_value = '';
	const addInput = document.querySelector('input[name="add"]:checked');

	if (addInput) {
		add_value = addInput.value;
	}

	if (add_value == "recommend") {
		add_recommend.classList.remove("none");
		add_event.classList.add("none");
	} else if (add_value == "event") {
		add_recommend.classList.add("none");
		add_event.classList.remove("none");
	} else {
		add_recommend.classList.add("none");
		add_event.classList.add("none");
	}
}

add();

recommend.addEventListener("click", function () {
	add();
});

event.addEventListener("click", function () {
	add();
});

/* 이용 약관 체크박스 boolean 값 저장*/
const agreements = {
	terms_use: false,
	terms_privacy: false,
	terms_receive: false,
	terms_age: false
}

const essential_agreements = {
	terms_use: false,
	terms_privacy: false,
	terms_age: false
}

check.forEach(function (item) {
	item.addEventListener("input", toggle_check);
});

/* 체크박스 input 이벤트가 발생할 때 마다 all_check() 함수 실행 */
function toggle_check(e) {
	const { checked, id } = e.target;
	agreements[id] = checked;
	all_check();
}

/* 따로 1개씩 체크해서 모두 체크 했을 때, 전체 동의 체크 되게 하는 구문 */
function all_check() {
	const { terms_use, terms_privacy, terms_receive, terms_age } = agreements;
	if (terms_use && terms_privacy && terms_receive && terms_age) {
		check_all.checked = true;
	} else {
		check_all.checked = false;
	}
}

/* 전체 동의 체크 했을 때, 모든 checkbox 선택 */
check_all.addEventListener("click",function (e) {
	let { checked } = e.target;
	if (checked) {
		check.forEach(function (item) {
			item.checked = true;
			agreements[item.id] = true;
		});
	} else {
		check.forEach(function (item) {
			item.checked = false;
			agreements[item.id] = false;
		});
	}
})

function submit_able() {
	if (id.value, password.value, password_check.value, name.value, email.value, phone.value, address.value == ""
	) {
		submit.disabled = true;
	} else {
		submit.disabled = false;
	}
}
submit_able();

/*
form handler, method="post"
ajax
fetch > mdn docs
endpoint url api 요청(?)
crud
try catch
와.... 이거 가능할까?
* 포함된 값을 data.json 으로 넘기기
* localstorage 이용해서 random 아이디 값 생성 후 unique id값
*/