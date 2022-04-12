let button = document.querySelector('.button_bar');
let nav = document.querySelector('.nav');

button.onclick = () => {
    nav.classList.toggle("shownav");
}