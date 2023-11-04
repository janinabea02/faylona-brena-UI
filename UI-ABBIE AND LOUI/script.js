const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]');

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

const modalButtons = document.querySelectorAll(".open-modal-button");

modalButtons.forEach(modalButton => {
    modalButton.addEventListener("click", function() {
        const modalId = this.getAttribute("data-modal-id");
        const modal = document.getElementById(modalId);
        openModal(modal);
    });
});

function openModal(modal) {
    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

const closeButtons = document.querySelectorAll("[data-modal-close]");

closeButtons.forEach(closeButton => {
    closeButton.addEventListener("click", function() {
        const modalId = this.getAttribute("data-modal-close");
        const modal = document.getElementById(modalId);
        closeModal(modal);
    });
});

window.addEventListener("click", (event) => {
    modalButtons.forEach(modalButton => {
        const modalId = modalButton.getAttribute("data-modal-id");
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});