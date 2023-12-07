/* SECTION IMAGE (pour appliquer le flou) */
const img_section = document.querySelector('#img_section')

/* MODALE */
const modales = document.querySelectorAll('.modale')

// Sélecteurs pour chaque modale
const modale_api = document.querySelector('.modale.api');
const modale_calculatrice = document.querySelector('.modale.calculatrice');
const modale_frontendmentor = document.querySelector('.modale.frontendmentor');
const modale_lacreme = document.querySelector('.modale.lacreme');
const modale_wordpress = document.querySelector('.modale.wordpress');
const modale_quiz = document.querySelector('.modale.quiz');


function centerModal(modale) { // Fonction pour ouvrir une modale
    const windowCenterX = window.innerWidth / 2; // Calcul du centre de la fenêtre visible

    // Ajuster la position de la modale en fonction du centre de la fenêtre visible
    const modalWidth = modale.offsetWidth;
    modale.style.left = `${windowCenterX - modalWidth / 2}px`;
}


function openModal(modale) { // Fonction pour ouvrir une modale
    modale.classList.remove('close'); //Suppression de la class close
    modale.classList.add('open'); //ajout de la class open
    img_section.style.filter = 'blur(10px)'; // Ajouter le filtre sur la section des images

    const windowCenterX = window.innerWidth / 2; // Calcule la position horizontale du centre de la fenêtre du navigateur
    const modalWidth = modale.offsetWidth; // Récupère la largeur de la modale
    const scrollOffset = projetsSection.scrollLeft; // Récupère le décalage horizontal actuel de la barre de défilement de la section de projets
    modale.style.left = `${windowCenterX - modalWidth / 2 + scrollOffset}px`; // Ajuste la position de la modale en fonction de la position de la fenêtre visible pour permettre au moment du swipe de toujours afficher la modale au centre
}


function closeModal() { // Fonction pour fermer toutes les modales
    modales.forEach(modale => { // Pour chaque modale
        modale.classList.remove('open'); // On supprime la class remove
        modale.classList.add('close'); // Et on ajoute la class add
    });
    img_section.style.filter = 'blur(0px)'; // Et j'enleve le filtre de flou en arrière plan de la section images
}


// Ajoutez des écouteurs d'événements pour chaque image avec la fonction pour ouvrir la modale associé en argument de celle-ci
document.querySelector('#img_api').addEventListener('click', () => openModal(modale_api));
document.querySelector('#img_calculatrice').addEventListener('click', () => openModal(modale_calculatrice));
document.querySelector('#img_frontendmentor').addEventListener('click', () => openModal(modale_frontendmentor));
document.querySelector('#img_lacreme').addEventListener('click', () => openModal(modale_lacreme));
document.querySelector('#img_wordpress').addEventListener('click', () => openModal(modale_wordpress));
document.querySelector('#img_quiz').addEventListener('click', () => openModal(modale_quiz));


const croix_modale = document.querySelectorAll('.modale img'); // Ajoutez un écouteur d'événements pour la fermeture de la modale
croix_modale.forEach(element => { // Pour chaque croix de la modale
    element.addEventListener('click', closeModal); // Au moment du clique, j'active la fonction close modale qui va me permettre de fermer la modale
});



/* DIV swipe_indicator_projets avec l'image de la flèche */


var projetsSection = document.getElementById('projets_section'); // Récupère la section projets
var swipeIndicatorProjets = document.getElementById('swipe_indicator_projets'); // Récupère l'indicateur de swipe pour projets
var scrollDirectionProjets = 1; // 1 pour droite, -1 pour gauche -- Variable pour suivre la direction du défilement pour projets

swipeIndicatorProjets.addEventListener('click', function () { // Ajoute un gestionnaire d'événements au clic sur la flèche pour projets
    projetsSection.scrollLeft += 300 * scrollDirectionProjets; // Déplace la barre de défilement horizontale en fonction de la direction
});


var scrollDirectionProjets = 1; // 1 pour droite


projetsSection.addEventListener('scroll', function () { // Au moment du scroll sur la section projet

    // Affiche ou masque la flèche en fonction du défilement
    if (projetsSection.scrollLeft > 0) { // Vérifie si la barre de défilement horizontale de la section projets a été déplacée vers la droite
        swipeIndicatorProjets.style.display = "flex"; // Si oui, affiche l'indicateur de swipe en configurant son affichage en mode flex
    } else { // Sinon, masque l'indicateur de swipe en configurant son affichage en mode none
        swipeIndicatorProjets.style.display = "none";
    }

    // Inverse la direction du swipe une fois arrivé tout à droite ou tout à gauche
    if (projetsSection.scrollLeft + projetsSection.clientWidth >= projetsSection.scrollWidth) {
        scrollDirectionProjets = -1; // Change la direction du défilement à gauche de -1
        swipeIndicatorProjets.style.display = "flex"; // Réaffiche la flèche
        swipeIndicatorProjets.classList.add('rotate-image'); // Ajoute la classe pour faire tourner l'image

    } else if (projetsSection.scrollLeft <= 0) { // Si le défilement est tout à gauche, 
        scrollDirectionProjets = 1; // rétablit la direction du défilement à droite
        swipeIndicatorProjets.style.display = "flex"; // Réaffiche l'indicateur de swipe en configurant son affichage en mode flex
        swipeIndicatorProjets.classList.remove('rotate-image'); // Retire la classe qui faisait tourner l'image pour arrêter l'animation de rotation
    }
});


swipeIndicatorProjets.addEventListener('click', function () { // Ajoute un gestionnaire d'événements au clic sur la flèche avec défilement centré pour projets
    scrollProjets();
});


function scrollProjets() { // Fonction pour le défilement centré pour la div swipe_indicator_projets
    var swipeIndicatorProjets = document.getElementById("swipe_indicator_projets"); // Selectionne la div swipe_indicator_projets
    var windowHalfWidth = window.innerWidth / 2; // Calcule la position de la moitié de la fenêtre
    var newPosition = projetsSection.scrollLeft + scrollDirectionProjets * windowHalfWidth; // Calcule la nouvelle position pour rester centré

    projetsSection.scrollTo({ // Appliquer la nouvelle position avec un défilement fluide
        left: newPosition, // Définit la nouvelle position horizontale du défilement
        behavior: "smooth" // Utilise un défilement fluide pour une transition agréable
    });

    swipeIndicatorProjets.style.visibility = "hidden"; // Cache la flèche après le clic 

    setTimeout(function () {
        var indicatorPosition = projetsSection.scrollLeft + windowHalfWidth; // Calculer la position centrée de la flèche en ajoutant la moitié de la largeur de la fenêtre au décalage actuel du défilement
        swipeIndicatorProjets.style.left = indicatorPosition + "px"; // Définir la nouvelle position horizontale de la flèche
        swipeIndicatorProjets.style.visibility = "visible"; // Rendre la flèche à nouveau visible
    }, 500);
}