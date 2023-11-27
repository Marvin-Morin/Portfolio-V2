// on crée un tableau contenant des objets
let aCarnet=[
    {
        prenom:"Marvin",
        nom:"Morin",
        tel:"0600000000",
        mail:"marvin.m@institutsolacroup.com",
        entreprise:"Institut Solacroup",
        fonction:"Stagiaire",
        formation:"Prepa",
        commentaire:""
    },
    {
        prenom:"Anthony",
        nom:"Lamidon",
        tel:"0610000000",
        mail:"anthony.l@institutsolacroup.com",
        entreprise:"Institut Solacroup",
        fonction:"Stagiaire",
        formation:"Prepa",
        commentaire:""
    },
    {
        prenom:"Alexandre",
        nom:"Buet",
        tel:"0620000000",
        mail:"alexandre.b@institutsolacroup.com",
        entreprise:"Institut Solacroup",
        fonction:"Stagiaire",
        formation:"Prepa",
        commentaire:""
    }
];

// fonction qui détermine comment on fait le tri
triCarnet=function(a,b){
    // vérifie si la propriété prenom d'un objet "a" du tableau et avant ou après alphabétiquement que la propriété prenom d'un objet "b" du tableau 
    return a.prenom.localeCompare(b.prenom);
}
// On trie le carnet alphabétiquement en fonction des prénoms
aCarnet=aCarnet.sort(triCarnet);

afficheDetails=function(pContact){
    let maDiv=document.querySelector('#details');
    maDiv.innerHTML='<h2>'+pContact.prenom+' '+pContact.nom+'</h2>';
    maDiv.innerHTML+='<p>mail. : '+pContact.mail+'</p>';
    maDiv.innerHTML+='<p>Tel. : '+pContact.tel+'</p>';
    maDiv.innerHTML+='<p>entreprise. : '+pContact.entreprise+'</p>';
    maDiv.innerHTML+='<p>fonction. : '+pContact.fonction+'</p>';
    maDiv.innerHTML+='<p>formation. : '+pContact.formation+'</p>';

}


// fonction qui crée une liste html avec ce qu'on lui passe comme paramètre
listeHTML=function(pContact){
    // On sélectionne notre balise <ul> :
    let maListe=document.querySelector('ul');

    // On crée un nouvel élément <li> :
    let monItem=document.createElement('li');
    
    // On crée le contenu de cet élément <li> :
    monItem.textContent=pContact.prenom+" "+pContact.nom;
    
    // On ajoute un événement quand on clique sur l'élément de la liste :
    monItem.onclick=function(){
        afficheDetails(pContact);
    }

    // On ajoute l'élément <li> à la liste <ul> :
    maListe.appendChild(monItem);
}

// boucle qui passe tous les prénoms et noms du tableau aCarnet à la fonction listeHTML
for (let contact of aCarnet){
    listeHTML(contact);
};



// Fonction qui traite le formulaire

function traitementFormulaire(e) {
    e.preventDefault();

    //On récuper le contenu de nos champs prenom, nom ...
    
    let prenom = document.querySelector('#prenom').value ;
    let nom = document.querySelector('#nom').value ;

    //on créer un nouvel objet qu'on ajoutera au tableau
    let monNouveauContact = {};


    //Traitement des erreurs : il doit avoir un prenom ou un nom

    if (prenom != '' || nom !='') {
        monNouveauContact.prenom=prenom;
        monNouveauContact.nom=nom;
        console.log(monNouveauContact);
    } else {
        console.log('erreur');
    }
    let email = document.querySelector('#mail').value;
    if (email.indexOf('@')>0) {
        monNouveauContact.mail=email;
    } else {
        alert('erreur chakal')
    }

    let tel = document.querySelector('#tel').value;
    monNouveauContact.tel=tel;

    let entreprise = document.querySelector('#entreprise').value;
    monNouveauContact.entreprise=entreprise;

    let fonction = document.querySelector('#fonction').value;
    monNouveauContact.fonction=fonction;

    let formation = document.querySelector('#formation').value;
    monNouveauContact.formation=formation;
    
    let commentaire = document.querySelector('#commentaire').value;
    monNouveauContact.commentaire=commentaire;

    aCarnet.push(monNouveauContact);
    listeHTML(monNouveauContact);
};

// Appel de la fonction qui traite les formulaires

let monForm = document.querySelector('form');
monForm.addEventListener('submit', traitementFormulaire);



// const valider = document.querySelector('button');
// const formulaire = document.querySelector('#form');

// let target = false;

// valider.addEventListener('click', () => {
//     target = !target;
//     if (target) {
//         formulaire.style.display='block';
//     } else{
//         formulaire.style.display='none';
//     }
// });


// const liste = document.querySelector('ul');
// const ajouterContact = document.querySelector('#ajouterContact');


// let toggle = false;

// valider.addEventListener('click', () => {
//     toggle = !toggle;
//     if (toggle) {
//         liste.style.visibility='hidden';
//     } else{
//         liste.style.visibility='visible';
//     }
// });


// ajouterContact.addEventListener('click', cacher);

//     function ajouterContact() {
//     toggle = !toggle;
//     if (toggle) {
//         ajouterContact.style.visibility='visible';
//     } else{
//         ajouterContact.style.visibility='hidden';
//     }
// };