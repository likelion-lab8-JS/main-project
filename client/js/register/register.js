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

