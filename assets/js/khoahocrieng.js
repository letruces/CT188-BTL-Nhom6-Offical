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
