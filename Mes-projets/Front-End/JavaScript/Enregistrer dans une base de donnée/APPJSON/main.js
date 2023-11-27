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
    alert(pContact);
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
}

