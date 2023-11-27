let nav = document.querySelector('nav');
let liens_menu = document.querySelector('#liens_menu');
let menu_responsive = document.querySelector('.menu-icon.cross');
let nav_h4 = document.querySelector('nav h4');

let bool = false;




window.addEventListener('load', function () {

    /* NAV */
    jQuery(document).ready(function ($) {

        $('.menu-icon').click(function (e) {
            e.preventDefault();
            $this = $(this);
            if ($this.hasClass('is-opened')) {
                $this.addClass('is-closed').removeClass('is-opened');
            } else {
                $this.removeClass('is-closed').addClass('is-opened');
            }
        })

    });

    menu_responsive.addEventListener('click', () => {
        liens_menu.style = bool ? 'display : none;' : 'display : flex; marginTop : auto;';
        nav.style.cssText = bool ? 'height: 80px; animation : none; flex-direction: row' : 'height: 100vh; animation : opacity .7s; flex-direction: column;';
        nav_h4.style = !bool ? 'position: absolute; top : 20px;' : 'position: initial;'
        bool = !bool;
    });
});


/* Scroll Y Remis à 0 après chaque clique sur les liens du menu */
const mes_sections = document.querySelectorAll('li')

mes_sections.forEach(element => {
    {
        element.addEventListener('click', function () {
            // Utilisez scrollTop pour définir la position de défilement en haut de la section
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
