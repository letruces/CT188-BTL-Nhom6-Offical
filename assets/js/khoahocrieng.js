// Lộ trình
const periodItems = document.querySelectorAll(".period-item");

periodItems.forEach((item) => {
  const btn = item.querySelector(".period-title");
  const content = item.querySelector(".period-inf");

  btn.addEventListener("click", () => {
    // đóng item khác
    periodItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        const otherContent = i.querySelector(".period-inf");
        otherContent.style.height = 0;
      }
    });

    // toggle current
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      content.style.height = 0;
    } else {
      item.classList.add("active");
      content.style.height = content.scrollHeight + "px";
    }
  });
});
// Course more
const moreBtn = document.querySelector(".course-view-more");
const teacherMore = document.querySelector(".course-more-list");
moreBtn.addEventListener("click", function () {
  teacherMore.classList.toggle("active");
  moreBtn.classList.toggle("active");
});
// Scroll Spy Sidebar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.8, // 80% section xuất hiện mới active
  },
);

sections.forEach((section) => {
  observer.observe(section);
});
