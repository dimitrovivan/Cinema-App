const getBurgerMenu = () => document.querySelector('.burger-menu');

export function toggleBurgerMenu() {

    let burgerMenu = getBurgerMenu();
    let bodyElement = document.querySelector('body');

    if(burgerMenu.classList.contains('open')) {
        
        burgerMenu.classList.remove('open');
        bodyElement.style.overflowY = "scroll";
    }
    else {
        burgerMenu.classList.add('open');
        bodyElement.style.overflowY = "hidden";
    }

}

export const hideBurgerMenu = () => getBurgerMenu() ? getBurgerMenu().classList.remove('open') : false;