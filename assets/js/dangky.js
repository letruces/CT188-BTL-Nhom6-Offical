// Submit form đăng ký
const form = document.querySelector(".form-register");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // chặn reload trang

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  let agree = document.getElementById("agree").checked;

  if (password !== confirm) {
    alert("Mật khẩu không khớp!");
    return;
  }
  if (agree === false) {
    alert("Bạn phải đồng ý với điều khoản và dịch vụ!");
    return;
  }
  alert("Đăng ký thành công!");
  window.location.href = "index.html";
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
