const body = document.querySelector('body');
const buttons = document.querySelectorAll('.menu__button');
const open = document.querySelector('open__button');

function menuToggle() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const isActive = body.classList.toggle('menu__active');
            if (isActive) {
                open.setAttribute('aria-expended', 'true');
            } else {
                open.setAttribute('aria-expended', 'false');
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    menuToggle();
})