alert("JavaScript file is linked!");

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menuContent = document.querySelector('.menu-content');

    menuIcon.addEventListener('click', () => {
        menuContent.classList.toggle('open');
    });
});



