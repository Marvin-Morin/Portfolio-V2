let aCarnet=[];
//fonction qui affiche les détails d'un contact
afficheDetails=function(pContact){
    let maDiv=document.querySelector('#details');
    maDiv.innerHTML='<h2>'+pContact.prenom+' '+pContact.nom+'</h2>';
    maDiv.innerHTML+='<p>Tel. : '+pContact.tel+'</p>';
    maDiv.innerHTML+='<p>Mail : '+pContact.mail+'</p>';
    maDiv.innerHTML+='<p>Entreprise : '+pContact.entreprise+'</p>';
    maDiv.innerHTML+='<p>Fonction : '+pContact.fonction+'</p>';
    maDiv.innerHTML+='<p>Formation : '+pContact.formation+'</p>';
    maDiv.innerHTML+='<p>Commentaire : '+pContact.commentaire+'</p>';
}

// fonction qui crée une liste html avec ce qu'on lui passe comme paramètre
listeHTML=function(pContact){
    // On sélectionne notre balise <ul> :
    let maListe=document.querySelector('ul');

    // On crée un nouvel élément <li> :
    let monItem=document.createElement('li');
    


    // On crée le contenu de cet élément <li> :
    monItem.textContent=pContact.prenom+' '+pContact.nom;
    monItem.onclick=function(){
        afficheDetails(pContact);
    }
    // On ajoute l'élément <li> à la liste <ul> :
    maListe.appendChild(monItem);
}




// fonction qui traite le formulaire
traitementFormulaire=function(e){
    // Empecher le rechargement de la page
    e.preventDefault();

    // on récupère le contenu du champs prénom :
    let prenom=document.querySelector('#prenom').value;
    // on récupère le contenu du champs nom :
    let nom=document.querySelector('#nom').value;
    
    
    
    //on crée un nouvel objet qu'on ajoutera au tableau
    let monNouveauContact={};

    //traitement des erreurs
    let erreur=0;
    if(prenom===''){
        erreur=1;
    }
    if(nom===''){
        erreur=1;
    }
    let email=document.querySelector('#mail').value;
    if(email.indexOf('@')<=0){
        erreur=1;

    }
    // Si il n'y a pas d'erreur, on traite le formulaire : 
    if(!erreur){
        monNouveauContact.prenom=prenom;
        monNouveauContact.nom=nom;
        monNouveauContact.mail=email;

        // on crée un variable tel, on lui affecte la valeur du champs de formulaire 'tel'
        let tel=document.querySelector('#tel').value;
    
        // on crée une propriété tel à notre object monNouveauContact, on lui affect la valeur de la variable tel
        monNouveauContact.tel=tel;
        
        let entreprise=document.querySelector('#entreprise').value;
        monNouveauContact.entreprise=entreprise;

        let fonction=document.querySelector('#fonction').value;
        monNouveauContact.fonction=fonction;

        let formation=document.querySelector('#formation').value;
        monNouveauContact.formation=formation;

        let commentaire=document.querySelector('#commentaire').value;
        monNouveauContact.commentaire=commentaire;

        // On ajoute notre objet au tableau aCarnet
        aCarnet.push(monNouveauContact);

        // on met à jour la liste html des contacts
        listeHTML(monNouveauContact);


    }
    // Sinon, on affiche un message d'erreur
    else{
        alert('votre formulaire comporte des erreurs !');
    }
    
}


// Appel de la fonction qui traite le formulaire quand on clique sur submit
let monForm=document.querySelector('form');
monForm.addEventListener('submit',traitementFormulaire);




// On crée notre requête :
// d'abord l'url du fichier à récupérer
let maRequete="http://127.0.0.1:5500/json/carnet.json";

//on crée une nouvelle requete XMLHTTPRequest
let request=new XMLHttpRequest();
// On lui passe les paramètres
request.open('GET',maRequete);
// on spécifie le type de la réponse
request.responseType = 'json';
// on envoie la requete :
request.send();

request.onload=function(){
    aCarnet=request.response.contacts;
    // boucle qui passe tous les prénoms et noms du tableau aCarnet à la fonction listeHTML
    for (let contact of aCarnet){
      listeHTML(contact);
    }
}





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