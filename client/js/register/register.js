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
let invite = document.getElementById("recommend");
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
let check_all = document.querySelector(".terms_all input");
let check = document.querySelectorAll(".terms_check input");

id.addEventListener("keyup", event_id);
password.addEventListener("keyup", event_password);
password_check.addEventListener("keyup", event_password_check);
name.addEventListener("keyup", event_name);
email.addEventListener("keyup",event_email);
phone.addEventListener("keyup",event_phone);
year.addEventListener("keyup",event_year);
month.addEventListener("keyup",event_month);
day.addEventListener("keyup",event_day);

function event_id() {
	if (id.value == "" || !id_essential.test(id.value)) {
		id_validation.classList.add("is_active");
		id_overlap.disabled = true;
	} else {
		id_validation.classList.remove("is_active");
		id_overlap.disabled = false;
	}
}

/*id.onkeyup = function () {
	if (id.value == "" || !id_essential.test(id.value)) {
		id_validation.classList.add("is_active");
		id_overlap.disabled = true;
	} else {
		id_validation.classList.remove("is_active");
		id_overlap.disabled = false;
	}
}*/

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
}
/*password.onkeyup = function () {
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
}*/

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
}

/*password_check.onkeyup = function () {
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
}*/

function event_name() {
	if (name.value == "") {
		name_validation.classList.add("is_active");
	} else {
		name_validation.classList.remove("is_active");
	}
}

/*name.onkeyup = function () {
	if (name.value == "") {
		name_validation.classList.add("is_active");
	} else {
		name_validation.classList.remove("is_active");
	}
}*/

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
}

/*email.onkeyup = function () {
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
}*/

function event_phone() {
	if (phone.value == "" || !phone_essential.test(phone.value) === true) {
		phone_validation.classList.add("is_active");
		phone_overlap.disabled = true;
	} else {
		phone_validation.classList.remove("is_active");
		phone_overlap.disabled = false;
	}
}

/*phone.onkeyup = function () {
	if (phone.value == "" || !phone_essential.test(phone.value) === true) {
		phone_validation.classList.add("is_active");
		phone_overlap.disabled = true;
	} else {
		phone_validation.classList.remove("is_active");
		phone_overlap.disabled = false;
	}
}*/

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
/*year.onkeyup = function () {
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
}*/

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
/*month.onkeyup = function () {
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
}*/

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
/*day.onkeyup = function () {
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
}*/

