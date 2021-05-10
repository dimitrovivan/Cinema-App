import { navigate } from './scripts/router.js';

let rootElement = document.querySelector('.root');

function navigateOnClick(e) {

    e.preventDefault();

    let {target} = e;

    if(target.tagName !== "A" || !target.classList.contains('navLink')) return;

    let newURL = new URL(target.href);

    navigate(newURL.pathname);

}

rootElement.addEventListener('click', navigateOnClick);

