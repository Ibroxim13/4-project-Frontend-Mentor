const faqTitles = document.querySelectorAll(".faq-title");
const col = document.querySelector(".col")
const media510 = window.matchMedia("(max-width: 510px)");

if (media510.matches) {
    col.style.backgroundImage = "url(./images/background-pattern-mobile.svg)"
}

faqTitles.forEach((faqTitle) => {
    faqTitle.addEventListener("click", () => {
        faqTitle.nextElementSibling.classList.toggle("show");
        faqTitle.nextElementSibling.classList.toggle("fade");
        if (faqTitle.children[1].getAttribute("src").endsWith("icon-plus.svg")) {
            faqTitle.children[1].setAttribute("src", "./images/icon-minus.svg");
        } else {
            faqTitle.children[1].setAttribute("src", "./images/icon-plus.svg");
        }
    });
});