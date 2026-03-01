// Submit form đăng ký
const form = document.querySelector(".form-sign-in");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // chặn reload trang

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    alert("Mật khẩu không khớp!");
    return;
  }
  alert("Đăng ký thành công!");
  window.location.href = "../index.html";
});
// JS ẩn hiện mật khẩu
const toggles = document.querySelectorAll(".toggle");

toggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    const input = this.previousElementSibling;

    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
});
