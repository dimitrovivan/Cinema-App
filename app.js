import { navigate } from './scripts/router.js';

( () => {
    navigate(location.pathname);
})();

let rootElement = document.querySelector('.root');

function navigateOnClick(e) {


    e.preventDefault();
    
    let {target} = e;

    let path;

    let fontParent = target.parentElement.parentElement;

    if(fontParent.classList.contains('navLink') && target.tagName == "FONT") path = new URL(fontParent.href).pathname;
    else if(target.tagName == "A" && target.classList.contains('navLink')) path = new URL(target.href).pathname;
    else return;
    
    if(path == location.pathname) return;
         
    return navigate(path);

}

rootElement.addEventListener('click', navigateOnClick);

