if (window.matchMedia("(min-width: 800px)").matches) {

    const Feature = document.querySelector('#feature');
    const SousFeature = document.querySelector('#sousmenufeature');
    const FlecheFeature = document.getElementById('flechefeature');

    let check = 1;

    Feature.addEventListener('mouseover', () => {
        SousFeature.style.display = (check === 1) ? "flex" : "none";
        check === 0;

        FlecheFeature.src = "./images/icon-arrow-up.svg";

    });

    Feature.addEventListener('mouseout', () => {
        SousFeature.style.display = "none";
        FlecheFeature.src = "./images/icon-arrow-down.svg";
    })


    const compagny = document.querySelector('#compagny');
    const souscompagny = document.querySelector('#souscompagny');
    const flechecompagny = document.getElementById('flechecompagny');


    compagny.addEventListener('mouseover', () => {
        souscompagny.style.display = (check === 1) ? "flex" : "none";
        check === 0;

        flechecompagny.src = "./images/icon-arrow-up.svg";

    });

    compagny.addEventListener('mouseout', () => {
        souscompagny.style.display = "none";
        flechecompagny.src = "./images/icon-arrow-down.svg";
    });

};




if (window.matchMedia("(max-width: 800px)").matches) {


    const menu__burger = document.querySelector('.menu__burger');
    const liens = document.querySelector('#liens');

    let check = 1;


    menu__burger.addEventListener('click', () => {


        if (check = check) {

            menu__burger.classList.add('close');
            liens.classList.add('animationburger');
            liens.classList.remove('animationburgerfermeture');
            liens.style.display = 'flex';
            check = !check;
        } else {

            menu__burger.classList.remove('close');
            liens.classList.remove('animationburger');
            liens.classList.add('animationburgerfermeture');
            liens.style.display = 'none';
            check = !check;
        }

    });






    const h1 = document.querySelector('h1');



    /* La largeur minimum de l'affichage est 800 px inclus */

    document.getElementById('imgdroite').src = "./images/image-hero-mobile.png";
    h1.innerHTML = ("Make remote work");


    const Feature = document.querySelector('#feature');
    const SousFeature = document.querySelector('#sousmenufeature');
    const FlecheFeature = document.getElementById('flechefeature');


    Feature.addEventListener('click', () => {

        SousFeature.style.display = (check = check) ? "none" : "flex";

        FlecheFeature.src = (check = check) ? "./images/icon-arrow-down.svg" : "./images/icon-arrow-up.svg" ;
        check = !check;

    });





    const compagny = document.querySelector('#compagny');
    const souscompagny = document.querySelector('#souscompagny');
    const flechecompagny = document.getElementById('flechecompagny');


    compagny.addEventListener('click', () => {

        souscompagny.style.display = (check = check ) ? "none" : "flex";

        flechecompagny.src = (check = check) ? "./images/icon-arrow-down.svg" : "./images/icon-arrow-up.svg";

        check = !check;

    });


}