const body = document.querySelector("body");
const buttons = document.querySelectorAll(".menu__button");
const open = document.querySelector(".open__button");

function menuToggle() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isActive = body.classList.toggle("menu__active");
      if (isActive) {
        open.setAttribute("aria-expanded", "true");
      } else {
        open.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function escapeMenu() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("menu__active")) {
      body.classList.remove("menu__active");
      open.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  menuToggle();
  escapeMenu();
});
