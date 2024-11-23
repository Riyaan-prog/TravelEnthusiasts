function toggleMenu() {
    var menuContent = document.querySelector('.menu-content').classList.toggle('open');
}


document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
