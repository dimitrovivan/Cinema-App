import { toggleBodyOverflowY } from "./util.js";

const getBurgerMenu = () => document.querySelector('.burger-menu');

export function toggleBurgerMenu() {

    let burgerMenu = getBurgerMenu();

    if (burgerMenu.classList.contains('open')) {
        burgerMenu.classList.remove('open');
        toggleBodyOverflowY();
    } else {
        burgerMenu.classList.add('open');
        toggleBodyOverflowY();

    }
}

export const hideBurgerMenu = () => getBurgerMenu() ? getBurgerMenu().classList.remove('open') : false;