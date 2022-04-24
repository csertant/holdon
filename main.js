const icnMenu = document.querySelector('.menu-icon');
const header = document.querySelector('header');
const checkbox = document.getElementById('checkbox');
//const headerImage = document.querySelector('.header-image');
//const headerMenus = document.querySelector('.header-menus');

icnMenu.addEventListener('click', () => {
    header.classList.toggle('header-inactive');
    //headerImage.classList.toggle('header-active');
    //headerMenus.classList.toggle('header-active');
});

window.addEventListener('click', (e)=> {
    if(!header.classList.contains('header-inactive') && !header.contains(e.target) && !icnMenu.contains(e.target)) {
        header.classList.add('header-inactive');
        checkbox.checked = false;
    }
})