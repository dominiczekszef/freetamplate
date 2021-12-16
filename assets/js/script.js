/* Dominik szef kurwo <3 */
const hamburger = document.querySelector('.hamburger');
const hamburgerBar = document.querySelectorAll('.bar');
const navMenu = document.querySelector('.nav-menu');
const preloader = document.querySelector('.preloader');
const main = document.querySelector('.main');


hamburger.addEventListener("click", mobileMenu)

function mobileMenu() {
    hamburger.classList.toggle('active');
    document.querySelectorAll('.bar').forEach(function(element, index) {
        console.log(element)
        element.classList.toggle('active');
    });
    navMenu.classList.toggle('active');
}

window.onload = () => {
    // setTimeout(() => {
    main.style.display = "block";
    preloader.style.display = "none";
    // }, 1500);
}