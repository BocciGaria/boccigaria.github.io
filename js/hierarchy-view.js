const simpleCards = document.getElementsByClassName("hv-toggle-card");
Array.from(simpleCards).forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.toggle("hv-hidden-card");
    });
});
