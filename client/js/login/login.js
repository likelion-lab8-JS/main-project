const login_id = document.getElementById("login_id"),
	login_password = document.getElementById("login_password");

const login = document.querySelector(".login_btn");

async function login_process() {
	fetch("http://localhost:3000/user_info", {
		method: "GET"
	})
		.then((response) => response.json())
		.then((data) => {
			try {
				data.forEach(function (item) {
					if (item.id == login_id.value) {
						localStorage.setItem("unique ID", login_id.value);
						throw new Error("stop loop")
					} else {
						throw new Error("stop loop")
					}
				})
			} catch (e) {
				console.log("에러");
			}
		});
}

login.addEventListener("click", login_process);