const span = document.querySelector('span');

const texte = 'Marvin';


let i = 0;

function writeText() {

    span.innerHTML = texte.slice(0, i);
    i++;
    if (i > texte.length) {
        i = 0;
    }
}

setInterval(writeText,700);

