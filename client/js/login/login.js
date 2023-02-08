const login_id = document.getElementById("login_id"),
	login_password = document.getElementById("login_password");

const login = document.querySelector(".login_btn");

async function login_process() {
	const login_essential = {
		id: login_id.value,
		password: login_password.value
	}

	try {
		fetch(`http://localhost:3000/user_info?q=${login_essential.id}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				if(data[0].id === login_essential.id && data[0].password === login_essential.password) {
					localStorage.setItem("Unique ID", login_essential.id);
					console.log("등록 성공");
				}
			})

	} catch (err) {
		console.log(err);
	}
}

login.addEventListener("click", login_process);