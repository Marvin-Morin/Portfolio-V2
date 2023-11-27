const value = document.getElementById('value');
const p = document.querySelector('p');
const button = document.querySelector('button');

function calculatrice() {

    nb1 = document.getElementById('nb1').valueAsNumber;
    nb2 = document.getElementById('nb2').valueAsNumber;

    indexValue = value.selectedIndex;

    if (indexValue === 0) {
        p.innerHTML = '= Entrez un opérateur';
    }
    else if (indexValue === 1) {
        p.innerHTML = `${nb1} * ${nb2} =` + ' ' + (nb1 * nb2) ;
    }
    else if (indexValue === 2) {
        p.innerHTML = `${nb1} + ${nb2} =` + ' ' + ( nb1 + nb2) ;
    }
    else if (indexValue === 3) {
        p.innerHTML = `${nb1} - ${nb2} =` + ' ' + (nb1 - nb2) ;
    }
    else if (indexValue === 4) {
        p.innerHTML = `${nb1} : ${nb2} =` + ' ' + (nb1 / nb2) ;
    }
    else {
        p.innerHTML = '= Entre deux nombres';
    }
};