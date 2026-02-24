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
