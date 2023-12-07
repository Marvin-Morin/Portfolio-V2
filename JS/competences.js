var competencesSection = document.getElementById('competences_section'); // Récupère la section compétences
var swipeIndicator = document.getElementById('swipe_indicator'); // Récupère l'indicateur de swipe
var scrollDirection = 1; // Variable pour suivre la direction du défilement (1 pour droite, -1 pour gauche)



swipeIndicator.addEventListener('click', function () { // Ajoute un gestionnaire d'événements au clic sur la flèche
    competencesSection.scrollLeft += 300 * scrollDirection; // Déplace la barre de défilement horizontale en fonction de la direction
});



competencesSection.addEventListener('scroll', function () { // Ajoute un gestionnaire d'événements pour le défilement horizontal
    
    var indicator = document.getElementById("swipe_indicator"); // Récupère l'élément de l'indicateur de swipe

    if (competencesSection.scrollLeft > 0) { // Vérifie si la barre de défilement est décalée vers la gauche
        indicator.style.display = "flex"; // Affiche l'indicateur si le défilement est effectué
    } else {
        indicator.style.display = "none"; // Masque l'indicateur si le défilement est à l'extrême gauche
    }

    if (competencesSection.scrollLeft + competencesSection.clientWidth >= competencesSection.scrollWidth) {
        scrollDirection = -1; // Inverse la direction du swipe une fois arrivé tout à droite ou tout à gauche
        indicator.style.display = "flex"; // Réaffiche la flèche

        document.querySelector('.rotate-on-max').classList.add('rotate-image'); // Ajoute la classe pour faire tourner l'image

    } else if (competencesSection.scrollLeft <= 0) {
        scrollDirection = 1; // Rétablit la direction du défilement à droite une fois arrivé tout à gauche
        indicator.style.display = "flex"; // Réaffiche la flèche

        document.querySelector('.rotate-on-max').classList.remove('rotate-image'); // Retire la classe pour arrêter de faire tourner l'image
    }
});



swipeIndicator.addEventListener('click', function () { // Ajoute un gestionnaire d'événements au clic sur la flèche avec défilement centré
    scrollCompetences(); // Appelle la fonction pour effectuer le défilement centré des compétences
});



function scrollCompetences() { // Fonction pour le défilement centré

    var indicator = document.getElementById("swipe_indicator");
    var windowHalfWidth = window.innerWidth / 2; // Calcule la position de la moitié de la fenêtre
    var newPosition = competencesSection.scrollLeft + scrollDirection * windowHalfWidth; // Calcule la nouvelle position pour rester centré

    competencesSection.scrollTo({ // Appliquer la nouvelle position avec un défilement fluide
        left: newPosition, // Définit la nouvelle position horizontale à laquelle la section doit être déplacée
        behavior: "smooth" // Active un défilement fluide pour une transition visuellement agréable

    });

    indicator.style.visibility = "hidden"; // Cache la flèche après le clic 

    setTimeout(function () { // Déclenche une fonction après une pause de 0.5 seconde
        var indicatorPosition = competencesSection.scrollLeft + windowHalfWidth; // Calcule la position horizontale centrée de la flèche
        indicator.style.left = indicatorPosition + "px"; // Déplace la flèche à la nouvelle position calculée
        indicator.style.visibility = "visible"; // Rend la flèche visible
    }, 500); // La pause de 0.5 seconde avant l'exécution de la fonction
}
