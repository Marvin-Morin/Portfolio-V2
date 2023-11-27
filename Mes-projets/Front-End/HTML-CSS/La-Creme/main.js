const FlecheTop = document.querySelector('#flechetop')

FlecheTop.addEventListener('click', () => {
    window.scroll(0, 0);
});

const FlecheMenuNav = document.querySelector('#flechemenunav')
const Liens = document.querySelector('.liens')

let check = true;

FlecheMenuNav.addEventListener('click', () => {

    Liens.style.display = (check = check) ? "flex" : "none";
    Liens.style.animationName = (check = check) ?  'menuburgeranimation' : 'menuburgeranimationclose';
    Liens.style.animationDuration = (check = check) ?  '0.6s' : '0.4s';
    FlecheMenuNav.src = (check = check) ? 'image/croix.png' : 'image/icons8-menu-30.png';

    check=!check;

});