let Accueil = document.querySelector('.principal');
let monBoutton = document.querySelector('button');
let choix = document.querySelector('.choix').value;
let maNote = document.querySelectorAll('.note');
let apres = document.querySelector('.after')


// Pour séléctionner et mettre en couleur d'arrière plan la note en orange après avoir cliqué sur un nombre
let etoile='';
maNote.forEach(note => {
    note.addEventListener('click', (e) => {
        for(let i = 0; i<maNote.length; i++) {
            if(maNote[i] === e.target) {
                maNote[i].classList.add('active-note');
                etoile=maNote[i].innerHTML;
                console.log(etoile);
            } else {
                maNote[i].classList.remove('active-note');
            }

            
        }
    })
});




// Pour afficher le menu de notation et cacher la div après 
// avoir cliqué sur le boutton SUBMIT pour montrer la DIV after 



monBoutton.addEventListener('click', ici);

function ici () {
    if(etoile==='') {
        alert('Mets une note !')
    }
    else{
        Accueil.style.display='none';
        apres.style.display='block';
        
        const div = document.querySelector('#selected')
        
        let monTitre = document.createElement('p');
        
        
        //let etoile = document.querySelectorAll('note');
        monTitre.textContent = 'Vous avez mis ' +etoile+ ' étoiles sur 5';
        
        div.appendChild(monTitre);
    }

};




