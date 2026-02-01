function login() {
  const correctUser = "admin";
  const correctPass = "123456";

  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (username === "" || password === "") {
    alert("Nhập đầy đủ thông tin!");
  } else if (username === correctUser && password === correctPass) {
    window.location.href = "index.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
