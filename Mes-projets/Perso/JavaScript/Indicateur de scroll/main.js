const scrollIndicator = document.querySelector('.scroll-indicator');
const content = document.querySelector('.content');


// UN OBJET EST UNE VARIABLE
// UNE METHODE EST UN PARAMETRE QUI DEFINI COMMENT TOUS VA SE FAIRE 
//UN PARAMETRE EST UN PARAMETRE DEFINIE DANS UNE FONCTION


/* 
    Ici, mon objet est "handleIntersect" qui va avoir une méthode qui va être "OBSERVE" POUR OBSERVER MON PARAMETRE QUI ICI EST MON CONTENU "CONTENT" ET L'ON VEUX OBSERVER TOUTES LES ENTREES DU HAUT DE MON CONTENU QUI VA APPARAITRE à
*/


// On créer un nouvel objet à partir de notre constructeur "IntersectionObserver" qui peut prendre en paramètre
// 2 choses mais qui ici en prend une et sera la collback qui va être appelé quand mon contenu va passer devant notre fenêtre "IntersectionObserver" va intersepter notre contenu et commencer la fonction de l'indicateur de scroll  .

// Quand mon contenu va entre devant ma fenêtre, je vais lancer cette fonction :"handleIntersect "
const observer = new IntersectionObserver (handleIntersect).observe(content);

function handleIntersect (entries) {
      const el = entries[0];

      /* si il y a une entrée,il execute la fonction indicatorAnimation */
      if (el.isIntersecting) {
        window.addEventListener("scroll", indicatorAnimation)

      /* sinon, il y a n'y a pas d'entrée,il supprime la fonction indicatorAnimation */
      } else if(!el.isIntersecting) {
        window.removeEventListener("scroll", indicatorAnimation)
      }
}


function indicatorAnimation () {

    /* Si ce que j'ai scrollé est superieur au haut de mon conntenu (Première phrase et dernière phrase), */
    if(window.scrollY > content.offsetTop) { 

        /* On calcul le pourcentage du scroll dans content  */

        /* Window scrollY est = à ce que j 'ai scrollé */

        /* Ce que j'ai scrollé - le haut de mon contenu / la hauteur du scroll *100 / 2 pour être plus précis dans le pourcentage */
        const pourcentage = ((window.scrollY - content.offsetTop) / content.scrollHeight * 100).toFixed(2);

        /* On fait l'animation d u scroll graçe au style transform qui va élargir grace au width 100% du CSS  notre ScalX qui va augmenter vers la droite avec un pourcentage divisé par 100 pour avoir un nomre entre 0 et 1 ce qui est égale à un pourcentage à deux chiffres après la virgule */

        scrollIndicator.style.transform = `scaleX(${(pourcentage / 100)})`
    } else {
        scrollIndicator.style.transform = "scaleX(0)" ;
    }
}


