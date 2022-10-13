const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-lists');
const navLink = document.querySelectorAll('.nav-link');

const mobileToggle = () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

}
hamburger.addEventListener('click', mobileToggle)
navLink.forEach(link => link.addEventListener('click',mobileToggle ))