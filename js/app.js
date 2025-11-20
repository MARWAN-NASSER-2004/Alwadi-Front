const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.maxHeight = null;
        i.querySelector(".icon").textContent = "+";
      }
    });

    item.classList.toggle("active");

    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".icon");

    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "-";
    } else {
      answer.style.maxHeight = null;
      icon.textContent = "+";
    }
  });
});
