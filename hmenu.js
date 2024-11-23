function toggleMenu() {
    onsole.log("Hamburger menu clicked!"); 
    document.querySelector('.menu-content').classList.toggle('open');
}

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);


