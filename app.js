import { navigate } from './scripts/router.js';
import { hideBurgerMenu } from './scripts/burgerMenu.js';

(() => {
    navigate(location.pathname);
})();

const rootElement = document.querySelector('.root');
rootElement.addEventListener('click', navigateOnClick);

function navigateOnClick(e) {

    e.preventDefault();
    let { target } = e;
    let path;
    let fontParent = target.parentElement.parentElement;

    if (fontParent.classList.contains('navLink') && target.tagName == "FONT") path = new URL(fontParent.href).pathname;
    else if (target.tagName == "A" && target.classList.contains('navLink')) path = new URL(target.href).pathname;
    else return;

    document.querySelector('body').style.overflowY = "scroll";
    if (path == location.pathname) return hideBurgerMenu();

    navigate(path);
    return hideBurgerMenu();

}
