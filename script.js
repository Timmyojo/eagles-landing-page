const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-lists');

const mobileToggle = () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

}

hamburger.addEventListener('click', mobileToggle)