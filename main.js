const icnMenu = document.querySelector('.menu-icon');
const header = document.querySelector('header');
//const headerImage = document.querySelector('.header-image');
//const headerMenus = document.querySelector('.header-menus');

icnMenu.addEventListener('click', () => {
    header.classList.toggle('header-inactive');
    //headerImage.classList.toggle('header-active');
    //headerMenus.classList.toggle('header-active');
});