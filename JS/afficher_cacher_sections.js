const nav_titre = document.querySelector('nav h4');

const divs = [
    document.querySelector('#presentation_section'),
    document.querySelector('#competences_section'),
    document.querySelector('#projets_section'),
    document.querySelector('#contact_section')
];

// Associe la fonction à l'événement onmouseover pour chaque section
const bouton_profil = document.querySelector('#profil');
bouton_profil.addEventListener('mouseover', () => {
    afficherSection(0);
    nav_titre.textContent = 'Profil';
    // Réinitialise l'état de l'animation
    nav_titre.style.animation = 'none';
    // Déclenche une reflow pour que la réinitialisation prenne effet
    void nav_titre.offsetWidth;
    // Applique à nouveau l'animation
    nav_titre.style.animation = 'animation_afficher .3s ease-in-out';
});


document.querySelector('#competences').addEventListener('mouseover', () => {
    afficherSection(1);
    nav_titre.textContent = 'Compétences';
    // Réinitialise l'état de l'animation
    nav_titre.style.animation = 'none';
    // Déclenche une reflow pour que la réinitialisation prenne effet
    void nav_titre.offsetWidth;
    // Applique à nouveau l'animation
    nav_titre.style.animation = 'animation_afficher .3s ease-in-out';
});

document.querySelector('#projets').addEventListener('mouseover', () => {
    afficherSection(2);
    nav_titre.textContent = 'Projets';
    // Réinitialise l'état de l'animation
    nav_titre.style.animation = 'none';
    // Déclenche une reflow pour que la réinitialisation prenne effet
    void nav_titre.offsetWidth;
    // Applique à nouveau l'animation
    nav_titre.style.animation = 'animation_afficher .3s ease-in-out';
});

document.querySelector('#contact').addEventListener('mouseover', () => {
    afficherSection(3);
    nav_titre.textContent = 'Contact';
    // Réinitialise l'état de l'animation
    nav_titre.style.animation = 'none';
    // Déclenche une reflow pour que la réinitialisation prenne effet
    void nav_titre.offsetWidth;
    // Applique à nouveau l'animation
    nav_titre.style.animation = 'animation_afficher .3s ease-in-out';
});

/* FONCTION QUI AJOUTE ET SUPPRIME LA CLASSE QUI PERMET D'AFFICHER OU DE CACHER LA SECTION */
function afficherSection(index) {
    // Ajoute la classe 'displayed' à la section survolée
    divs[index].classList.add('displayed');

    // Retire la classe 'displayed' des autres sections
    for (let i = 0; i < divs.length; i++) {
        if (i !== index) {
            divs[i].classList.remove('displayed');
        }
    }
}

/* APPLICATION DE LA FERMETURE AUTOMATIQUE DU MENU VERSION MOBILE  */
function appliquerCodeSiPetiteFenetre() {
    if (window.innerWidth <= 768) {
        // Votre code ici
        let liensMenu = document.querySelectorAll('li');
        liensMenu.forEach(function (lien) {
            lien.addEventListener('click', function () {
                menu_responsive.click();
            });
        });
    }
}

// Appeler la fonction une fois au chargement initial de la page
appliquerCodeSiPetiteFenetre();

// Appeler la fonction lors des changements de taille de fenêtre
window.addEventListener('resize', appliquerCodeSiPetiteFenetre);
