const iconMenu = document.querySelector('.icon-menu');
const menuList = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const bodyElement = document.body;

iconMenu.addEventListener('click', openMenu);

function openMenu(event) {


    if (iconMenu) {
        iconMenu.classList.toggle('_active');
        menuList.classList.toggle('_active');

        if (menuList.classList.contains('_active')) {
            logo.style.right = '-120%';
        } else if (!menuList.classList.contains('_active')) {
            logo.style.right = '0';
        }

        function bodyLockStatus() {
            if (iconMenu.classList.contains('_active')) {
                bodyElement.classList.add('_lock');
            }
        }

        function bodyLockStatusClose() {
            if (!iconMenu.classList.contains('_active')) {
                bodyElement.classList.remove('_lock');
            }
        }

        bodyLockStatus();
        bodyLockStatusClose();
    }

    event.preventDefault();
}