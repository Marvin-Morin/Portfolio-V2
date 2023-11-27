let select = document.getElementById('age');
const titre = document.querySelector('h2');
const img = document.getElementById('img');

// /* Methode 1 / 15 lignes  */

select.addEventListener('change', () => {

    value = select.selectedIndex;

    switch (value) {

        case 1:
            titre.innerHTML = 'Nous vous consseillons le film Cendrillon';
            img.innerHTML = `<img src="./img/cendrillon.jpg">`;
            break;

        case 2:
            titre.innerHTML = 'Nous vous consseillons le film Matrix';
            img.innerHTML = `<img src="./img/matrix.jpg">`;
            break;

        case 3:
            titre.innerHTML = 'Nous vous consseillons le film Top Gun';
            img.innerHTML = `<img src="./img/topgun.webp">`;
            break;
        default: titre.innerHTML = 'Choisissez votre âge :'
    }
});



/* Methode 2 / 14 lignes (préférable) */

// select.addEventListener('change', () => {

//     value = select.selectedIndex;

//     if (value === 1) {
//         titre.innerHTML = 'Nous vous consseillons le film Cendrillon';
//         img.innerHTML = `<img src="./img/cendrillon.jpg">`;
//     }
//     else if (value === 2) {
//         titre.innerHTML = 'Nous vous consseillons le film Matrix';
//         img.innerHTML = `<img src="./img/matrix.jpg">`;
//     }
//     else if (value === 3) {
//         titre.innerHTML = 'Nous vous consseillons le film Top Gun';
//         img.innerHTML = `<img src="./img/topgun.webp">`;
//     }

//     else {
//         titre.innerHTML = 'Choisissez votre âge :';
//         img.innerHTML = ``;
//     }
// });