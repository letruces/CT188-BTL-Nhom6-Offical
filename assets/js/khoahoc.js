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
