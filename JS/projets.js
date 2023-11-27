/* SECTION IMAGE (pour appliquer le flou) */
const img_section = document.querySelector('#img_section')
/* MODALE */
const modales = document.querySelectorAll('.modale')

/* MODALE PREMIERE IMAGE */
const modale_api = document.querySelector('.modale.api')
document.querySelector('#img_api').addEventListener('click', () => {
    modale_api.classList.remove('close')
    modale_api.classList.add('open');
    img_section.style.filter = 'blur(10px)'
});

/* MODALE DEUXIEME IMAGE */
const modale_calculatrice = document.querySelector('.modale.calculatrice')
document.querySelector('#img_calculatrice').addEventListener('click', () => {
    modale_calculatrice.classList.remove('close')
    modale_calculatrice.classList.add('open');
    img_section.style.filter = 'blur(10px)'
});

/* MODALE TROISIEME IMAGE */
const modale_frontendmentor = document.querySelector('.modale.frontendmentor')
document.querySelector('#img_frontendmentor').addEventListener('click', () => {
    modale_frontendmentor.classList.remove('close')
    modale_frontendmentor.classList.add('open');
    img_section.style.filter = 'blur(10px)'
});

/* MODALE QUATRIEME IMAGE */
const modale_lacreme = document.querySelector('.modale.lacreme')
document.querySelector('#img_lacreme').addEventListener('click', () => {
    modale_lacreme.classList.remove('close')
    modale_lacreme.classList.add('open');
    img_section.style.filter = 'blur(10px)'
});

/* MODALE CINQUIEME IMAGE */
const modale_wordpress = document.querySelector('.modale.wordpress')
document.querySelector('#img_wordpress').addEventListener('click', () => {
    modale_wordpress.classList.remove('close')
    modale_wordpress.classList.add('open');
    img_section.style.filter = 'blur(10px)'
});

/* MODALE SIXIEME IMAGE */
const modale_quiz = document.querySelector('.modale.quiz')
document.querySelector('#img_quiz').addEventListener('click', () => {
    modale_quiz.classList.remove('close')
    modale_quiz.classList.add('open');
    img_section.style.filter = 'blur(10px)'
});


/* FERMER MODALE */
/* CROIX MODALE */
const croix_modale = document.querySelectorAll('.modale img');
croix_modale.forEach(element => {
    element.addEventListener('click', () => {
        modales.forEach(modale => {
            modale.classList.remove('open')
            modale.classList.add('close');
        })
        img_section.style.filter = 'blur(0px)'
    });
})