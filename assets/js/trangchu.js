const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  btn.addEventListener("click", () => {
    // đóng item khác
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        const otherAnswer = i.querySelector(".faq-answer");
        otherAnswer.style.height = 0;
      }
    });

    // toggle current
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      answer.style.height = 0;
    } else {
      item.classList.add("active");
      answer.style.height = answer.scrollHeight + "px";
    }
  });
});
const form = document.getElementById("consult-form");
const popup = document.getElementById("popup");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.add("hide");
    setTimeout(() => {
      popup.classList.remove("show", "hide");
    }, 400);
  }, 3000);
  form.reset();
});
