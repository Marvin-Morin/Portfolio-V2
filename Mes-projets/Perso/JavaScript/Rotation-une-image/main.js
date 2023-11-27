const img = document.querySelector('img');
const h4 = document.querySelector('h4')

function rotation() {
    
    const input = document.querySelector('input');

    
    
    img.style.transform = `rotate(${input.value}deg)`;
    
    h4.innerHTML = `Vous avez choisis le nombre ${input.value}`;

    
    if (input.value > 361) {
        alert('Le nombre que vous avez choisis est trop grand !')
        img.style.transform = `rotate(0deg)`;
        
    }
    
    if (input.value < -361) {
        alert('Le nombre que vous avez choisis est trop petit !')
        img.style.transform = `rotate(0deg)`;
    };
    
};



const aleatoire = document.querySelector('#aleatoire');
const inputt = document.querySelector('input');

const min = 0;
const max = 360;



function aleatoirFunction () {

    valueAleatoire = Math.floor(Math.random() * (max - min)) + min; 
    
    inputt.innerHTML = valueAleatoire;

    img.style.transform = `rotate(${valueAleatoire}deg)`;
    
    h4.innerHTML = `Le nombre choisis aléatoirement est le : ${valueAleatoire}`;



};

    






