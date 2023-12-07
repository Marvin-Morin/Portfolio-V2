/* BARRE DE NAVIGATION */


// Sélection des éléments du DOM

let nav = document.querySelector('nav'); 
let liens_menu = document.querySelector('#liens_menu');
let menu_responsive = document.querySelector('.menu-icon.cross');
let nav_h4 = document.querySelector('nav h4');
let bool = false; // Variable pour le suivi de l'état du menu


window.addEventListener('load', function () { // Ajoute un écouteur d'événements pour s'assurer que le DOM est chargé
    jQuery(document).ready(function ($) { // Utilisation de jQuery pour un effet de menu
        $('.menu-icon').click(function (e) { // Ajoute un écouteur d'événements pour le clic sur l'icône du menu
            e.preventDefault();
            $this = $(this); // Assignation de l'élément actuel à la variable $this pour simplifier l'utilisation ultérieure
            if ($this.hasClass('is-opened')) { // Vérifie si l'élément actuel a la classe 'is-opened'
                $this.addClass('is-closed').removeClass('is-opened'); // Si c'est le cas, ajoute la classe 'is-closed' et supprime 'is-opened'
            } else {
                $this.removeClass('is-closed').addClass('is-opened'); // Sinon, supprime la classe 'is-closed' et ajoute 'is-opened'
            }
        });
    });



    /* Ajout d'une écoute d'évenement sur l'icon du menu en mode mobile */
    
    menu_responsive.addEventListener('click', () => { // Ajoute un écouteur d'événements pour le clic sur l'icône du menu responsive
        liens_menu.style = bool ? 'display : none;' : 'display : flex; marginTop : auto;'; // Affiche ou masque les liens du menu en fonction de l'état actuel
        nav.style.cssText = bool ? 'height: 80px; animation : none; flex-direction: row' : 'height: 100vh; animation : opacity .7s; flex-direction: column;'; // Modifie le style de la navigation en fonction de l'état actuel
        nav_h4.style = !bool ? 'position: absolute; top : 20px;' : 'position: initial;'; // Modifie le style du titre de la navigation en fonction de l'état actuel
        bool = !bool; // Inverse la valeur booléenne pour le suivi de l'état du menu
    });


    
    /* MENU RESPONSIVE */
    
    /* AU CLIC SUR LES LIENS DE LA NAV */

    const mes_sections = document.querySelectorAll('li'); // Sélectionne toutes les éléments de la liste du menu

    mes_sections.forEach(element => { // Ajoute un écouteur d'événements à chaque éléments du menu
        element.addEventListener('click', function () {
            window.scrollTo({ // Utilise scrollTop pour définir la position de défilement en haut de la section
                top: 0, // Ajuste le scroll en haut de la page pour chaque clique sur les liens du menus
                behavior: 'smooth' // Défilement fluide
            });
        });
    });
});
