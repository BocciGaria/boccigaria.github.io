(function (d) {
    const toggleImages = d.getElementsByClassName("js-animation-toggle-image");
    Array.from(toggleImages).forEach((image) => {
        const trigger = d.getElementById(image.getAttribute("data-image-for"));
        d.addEventListener("scroll", () => {
            toggleImage(image, trigger);
        });
    });
    d.dispatchEvent(new Event("scroll"));
})(document);

function toggleImage(image, trigger) {
    if (
        trigger.getBoundingClientRect().top <= window.innerHeight * 0.25
        && trigger.getBoundingClientRect().bottom > window.innerHeight * 0.25
    ) {
        image.classList.add("animation-toggle-image-front");
        image.classList.remove("animation-toggle-image-back");
    } else {
        image.classList.add("animation-toggle-image-back");
        image.classList.remove("animation-toggle-image-front");
    }
}
