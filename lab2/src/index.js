const menuIcon = document.getElementById('menuIcon');
const bagIcon = document.getElementById('bagIcon')
const menu = document.getElementById('menu');
const content = document.getElementById('content');

const handleMenu = () => {
    menu.classList.toggle("hidden");
    content.classList.toggle("hidden");
}

menuIcon.onclick = handleMenu;
bagIcon.onclick = handleMenu;
