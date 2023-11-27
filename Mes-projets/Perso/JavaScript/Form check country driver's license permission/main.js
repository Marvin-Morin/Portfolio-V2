const pays = document.getElementById('pays');
const age = document.getElementById('age');
const titre = document.querySelector('h5');
const submit = document.querySelector('#submit');


function verif () {

    
    
    pays.addEventListener('change', () => {
        
        indexPays = pays.selectedIndex;

    if (indexPays >= 1) {
        age.style.display = 'flex';
        titre.innerHTML = `Veuillez entrer votre âge :`;
    }

age.addEventListener('change', () => {

    indexPays = pays.selectedIndex;
    indexAge = age.selectedIndex;

    submit.addEventListener('click', () => {



        if ((indexPays === 1) && (indexAge >= 4)) {
            titre.innerHTML = `Votre pays vous autorise à conduire !`;
        }

        else if ((indexPays === 1) && (indexAge < 4)) {
            titre.innerHTML = 'Votre pays ne vous autorise pas à conduire !';
        }

        else {
            if ((indexPays === 2) && (indexAge >= 2)) {
                titre.innerHTML = `Votre pays vous autorise à conduire !`;
            }

            else if ((indexPays === 2) && (indexAge < 2)) {
                titre.innerHTML = 'Votre pays ne vous autorise pas à conduire !';
            }

        }

});
})})};

    verif();