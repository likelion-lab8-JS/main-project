/* 회원 정보 (value 값 저장 할 변수) */
let id = document.getElementById("id"),
<<<<<<< HEAD
	password = document.getElementById("password"),
	password_check = document.getElementById("password_check"),
	name = document.getElementById("name"),
	email = document.getElementById("email"),
	phone = document.getElementById("phone"),
	address = document.getElementById("address"),
	sub_address = document.getElementById("sub_address"),
	gender = document.querySelector('input[name="gender"]:checked'),
	male = document.getElementById("male"),
	female = document.getElementById("female"),
	nocheck = document.getElementById("nocheck"),
	today = new Date(),
	year = document.getElementById("birth_year"),
	year_now = today.getFullYear(),
	month = document.getElementById("birth_month"),
	day = document.getElementById("birth_day"),
	recommend = document.getElementById("recommend"),
	event = document.getElementById("event"),
	add_id = document.getElementById("add_id"),
	join_event = document.getElementById("join_event");

/* 정규 표현식 */
let id_essential = /^[A-Za-z0-9]{4,20}$/,
	password_essential = /^[a-zA-Z0-9][!@#$%^*+_=()/<>?-]{8,20}$/,
	email_essential = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
	phone_essential = /^[0-9]*$/;

/* validation 변수 저장 */
let id_validation = document.getElementById("id_validation"),
	password_validation = document.getElementById("password_validation"),
	password_length = document.getElementById("password_length"),
	password_retry = document.getElementById("password_retry"),
	password_same = document.getElementById("password_same"),
	name_validation = document.getElementById("name_validation"),
	email_validation = document.getElementById("email_validation"),
	email_match = document.getElementById("email_match"),
	phone_validation = document.getElementById("phone_validation"),
	year_validation = document.getElementById("year_validation"),
	year_available = document.getElementById("year_available"),
	month_validation = document.getElementById("month_validation"),
	month_available = document.getElementById("month_available"),
	day_validation = document.getElementById("day_validation"),
	day_available = document.getElementById("day_available");

/* button 변수 저장 */
let id_overlap = document.getElementById("id_overlap"),
	email_overlap = document.getElementById("email_overlap"),
	phone_overlap = document.getElementById("phone_overlap"),
	address_search = document.getElementById("address_search"),
	address_research = document.getElementById("address_research"),
	submit = document.getElementById("register_submit");

/* 추천인, 이벤트 변수 저장 */
let add_recommend = document.querySelector(".register.recommend"),
	add_event = document.querySelector(".register.event");

/* 이용 약관 변수 */
let use = document.getElementById("terms_use"),
	privacy = document.getElementById("terms_privacy"),
	receive = document.getElementById("terms_receive"),
	age = document.getElementById("terms_age");
/* 체크 박스 변수 */
let check_all = document.querySelector(".terms_all input"),
	check = document.querySelectorAll(".terms_check input");
=======
		password = document.getElementById("password"),
		password_check = document.getElementById("password_check"),
		name = document.getElementById("name"),
		email = document.getElementById("email"),
		phone = document.getElementById("phone"),
		address = document.getElementById("address"),
		sub_address = document.getElementById("sub_address"),
		gender = document.querySelector('input[name="gender"]:checked'),
		male = document.getElementById("male"),
		female = document.getElementById("female"),
		nocheck = document.getElementById("nocheck"),
		today = new Date(),
		year = document.getElementById("birth_year"),
		year_now = today.getFullYear(),
		month = document.getElementById("birth_month"),
		day = document.getElementById("birth_day"),
		recommend = document.getElementById("recommend"),
		event = document.getElementById("event"),
		add_id = document.getElementById("add_id"),
		join_event = document.getElementById("join_event");

/* 정규 표현식 */
let id_essential = /^[A-Za-z0-9]{4,20}$/,
		password_essential = /^[a-zA-Z0-9][!@#$%^*+_=()/<>?-]{8,20}$/,
		email_essential = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
		phone_essential = /^[0-9]*$/;

/* validation 변수 저장 */
let id_validation = document.getElementById("id_validation"),
		password_validation = document.getElementById("password_validation"),
		password_length = document.getElementById("password_length"),
		password_retry = document.getElementById("password_retry"),
		password_same = document.getElementById("password_same"),
		name_validation = document.getElementById("name_validation"),
		email_validation = document.getElementById("email_validation"),
		email_match = document.getElementById("email_match"),
		phone_validation = document.getElementById("phone_validation"),
		year_validation = document.getElementById("year_validation"),
		year_available = document.getElementById("year_available"),
		month_validation = document.getElementById("month_validation"),
		month_available = document.getElementById("month_available"),
		day_validation = document.getElementById("day_validation"),
		day_available = document.getElementById("day_available");

/* button 변수 저장 */
let id_overlap = document.getElementById("id_overlap"),
		email_overlap = document.getElementById("email_overlap"),
		phone_overlap = document.getElementById("phone_overlap"),
		address_search = document.getElementById("address_search"),
		address_research = document.getElementById("address_research"),
		submit = document.getElementById("register_submit");

/* 추천인, 이벤트 변수 저장 */
let add_recommend = document.querySelector(".register.recommend"),
		add_event = document.querySelector(".register.event");

/* 이용 약관 변수 */
let use = document.getElementById("terms_use"),
		privacy = document.getElementById("terms_privacy"),
		receive = document.getElementById("terms_receive"),
		age = document.getElementById("terms_age");
/* 체크 박스 변수 */
let check_all = document.querySelector(".terms_all input"),
		check = document.querySelectorAll(".terms_check input");
>>>>>>> 919dbec473e1976731875d93624538f708b42d12

id.addEventListener("keyup", event_id);
id.addEventListener("click", random_text);
password.addEventListener("keyup", event_password);
password_check.addEventListener("keyup", event_password_check);
name.addEventListener("keyup", event_name);
<<<<<<< HEAD
email.addEventListener("keyup", event_email);
phone.addEventListener("keyup", event_phone);
year.addEventListener("keyup", event_year);
month.addEventListener("keyup", event_month);
day.addEventListener("keyup", event_day);
=======
email.addEventListener("keyup",event_email);
phone.addEventListener("keyup",event_phone);
year.addEventListener("keyup",event_year);
month.addEventListener("keyup",event_month);
day.addEventListener("keyup",event_day);
>>>>>>> 919dbec473e1976731875d93624538f708b42d12

/* 10자리 random text 생성 함수 */
function random_text() {
	id.value = Math.random().toString(36).substring(2, 12);
}

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
<<<<<<< HEAD
address_search.addEventListener("click", function () {
=======
address_search.addEventListener("click", function (){
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
	kakao_address();
});

/* 재검색 눌렀을 때 */
address_research.addEventListener("click", function () {
	document.querySelector(".address_wrap").classList.remove("none");
	document.querySelector(".address_detail").classList.add("none");
	kakao_address();
});

male.addEventListener("click", function () {
	gender.value = "male";
})

female.addEventListener("click", function () {
	gender.value = "female";
})

nocheck.addEventListener("click", function () {
	gender.value = "nocheck";
})

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
<<<<<<< HEAD

=======
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
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
<<<<<<< HEAD

=======
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
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

check.forEach(function (item) {
	item.addEventListener("input", toggle_check);
});

/* 체크박스 input 이벤트가 발생할 때 마다 all_check() 함수 실행 */
function toggle_check(e) {
	const { checked, id } = e.target;
	agreements[id] = checked;
	submit_able();
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
<<<<<<< HEAD
check_all.addEventListener("click", function (e) {
=======
check_all.addEventListener("click",function (e) {
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
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
	submit_able();
})

/* 가입하기 버튼 활성화, 비활성화 */
function submit_able() {
	if (id.value, password.value, password_check.value, name.value, email.value, phone.value, address.value == ""
	&& use.checked, privacy.checked, age.checked == false) {
		submit.disabled = true;
	} else {
		submit.disabled = false;
	}
}

async function register() {
	const user_info = {
		id: id.value,
		password: password.value,
		name: name.value,
		email: email.value,
		phone: phone.value,
		address: address.value,
		sub_address: sub_address.value,
		gender: gender.value,
		year: year.value,
		month: month.value,
		day: day.value,
		add_id: add_id.value,
		join_event: join_event.value,
		use: use.checked,
		privacy: privacy.checked,
		receive: receive.checked,
		age: age.checked
	};

	fetch("http://localhost:3000/user_info", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
<<<<<<< HEAD
		body: JSON.stringify(user_info),
	})
		.then((user_info) => user_info.json())
		.then((data) => console.log(data));
}

submit.addEventListener("click", register);
=======
		body: JSON.stringify(user_info)
	})
		.then((user_info) => {
			if (user_info.ok) {
				console.log("성공", user_info);
			} else {
				console.log("실패");
			}
		}) 
}

submit.addEventListener("click",register);
>>>>>>> 919dbec473e1976731875d93624538f708b42d12
