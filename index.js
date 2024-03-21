let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.header__list');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('activee');
}