// Sidebar
window.addEventListener("load", () => {
  const currentPage = window.location.pathname;
  document.querySelectorAll(".nav-sidebar-btn").forEach((btn) => {
    if (
      btn.getAttribute("href") &&
      currentPage.includes(btn.getAttribute("href"))
    ) {
      const list = btn.nextElementSibling;
      if (list) {
        list.classList.add("show");
        btn.classList.add("active-parent");
      }
    }
  });
});
// Modal form
const openBtns = document.querySelectorAll(".course_register");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.add("active");
    modal.classList.add("active");
    // Chặn scroll khi mở modal form
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
  modal.classList.remove("active");
  // Mở scroll khi tắt modal form
  document.body.style.overflow = "auto";
});

// Click vào overlay để đóng
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  modal.classList.remove("active");
  // Mở scroll khi tắt modal form
  document.body.style.overflow = "auto";
});

// Thêm sản phẩm vào giỏ hàng
const buttons = document.querySelectorAll(".add-shopping");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const course = btn.closest(".course_item");
    const product = {
      id: course.dataset.id,
      name: course.dataset.name,
      price: Number(course.dataset.price),
    };
    addToCart(product);
    if (confirm("Đã thêm vào giỏ! Xem giỏ hàng?")) {
      window.location.href = "../giohang.html";
    }
  });
});
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exist = cart.find((item) => item.id === product.id);

  if (exist) {
    exist.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
