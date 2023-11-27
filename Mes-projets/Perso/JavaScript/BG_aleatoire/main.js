
const body = document.querySelector('body')
const button = document.querySelector('button')

function addBG() {

  element =  '#'+(Math.random()*0xFFFFFF<<0).toString(16);



        body.style.backgroundColor = element;
        button.style.color = element;




};




/* http://morganridel.fr/generer-des-couleurs-aleatoires-en-javascript */