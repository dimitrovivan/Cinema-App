import { navigate } from './scripts/router.js';

( () => {
    navigate(location.pathname);
})();

let rootElement = document.querySelector('.root');

function navigateOnClick(e) {

    e.preventDefault();
    
    let {target} = e;

    if(target.tagName !== "A" || !target.classList.contains('navLink')) return;

    if(!target.href) return;

    let newURL = new URL(target.href);

    if(newURL.pathname == location.pathname) return;


    navigate(newURL.pathname);

}

rootElement.addEventListener('click', navigateOnClick);

