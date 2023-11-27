let aStagiaires=[
    ["Marvin","Morin"],
    ["Anthony","Lamidon"],
    ["Alexandre","Buet"]
];



//aStagiaires.push(["Louis","Trohel"]);

/*direBonjour=function(prenom,nom){
    let sPhrase="Bonjour "+prenom+" "+nom+", ça va?";
    return (sPhrase)
}


for(let i=0; i<aStagiaires.length; i++){
    let sPrenom=aStagiaires[i][0];
    let sNom=aStagiaires[i][1];
    console.log(direBonjour(sPrenom,sNom));
}*/

listeHTML=function(pPrenom,pNom){
    // On sélectionne notre balise <ul> :
    let maListe=document.querySelector('ul');

    // On crée un nouvel élément <li> :
    let monItem=document.createElement('li');
    
    // On crée le contenu de cet élément <li> :
    monItem.textContent=pPrenom+" "+pNom;
    
    // On ajoute l'élément <li> à la liste <ul> :
    maListe.appendChild(monItem);
}

for(let i=0; i<aStagiaires.length; i++){
    let sPrenom=aStagiaires[i][0];
    let sNom=aStagiaires[i][1];
    listeHTML(sPrenom,sNom);
}

ajouterUnStagiaire=function(){
    //on ouvre un prompt pour le prénom :
    let sPrenom=prompt("Entrez le prénom");

    // on vérifie qu'il n'y a pas d'erreur dans le prénom (appuie sur annuler, appuie sur ok sans rien de rentré ou juste un espace)
    if(sPrenom===null || sPrenom==="" || sPrenom===" "){
        alert("Erreur : il faut un prénom !");
    }
    else{
        //on ouvre un prompt pour le nom :
        let sNom=prompt("Entrez Le nom");
        //on vérifie qu'il n'y pas d'erreur
        if(sNom===null || sNom==="" || sNom===" "){
            alert("Erreur : il faut un nom !");
        }
        else {
            //on ajoute les deux valeurs à aStagiaires :
            aStagiaires.push([sPrenom,sNom]);

            // on calcul la valeur du dernier index du tableau aStagiaires
            let lastIndex=aStagiaires.length-1;

            // Et on ajoute à la liste <ul>
            listeHTML(aStagiaires[lastIndex][0],aStagiaires[lastIndex][1]);
        }
    }    
}

let monBouton=document.querySelector("button");
monBouton.onclick=function(){
    ajouterUnStagiaire();
}














// on crée un tableau contenant des objets
let aCarnet=[
    {
        prenom:"Marvin",
        nom:"Morin",
        tel:"0600000000",
        mail:"marvin.m@institutsolacroup.com",
        entreprise:"Institut Solacroup",
        fonction:"Stagiaire",
        formation : "Tremplin",
        commentaire:""
    },
    {
        prenom:"Anthony",
        nom:"Lamidon",
        tel:"0610000000",
        mail:"anthony.l@institutsolacroup.com",
        entrerprise:"Institut Solacroup",
        fonction:"Stagiaire",
        formation : "Tremplin",
        commentaire:""
    },
    {
        prenom:"Alexandre",
        nom:"Buet",
        tel:"0620000000",
        mail:"alexandre.b@institutsolacroup.com",
        entrerprise:"Institut Solacroup",
        fonction:"Stagiaire",
        formation : "Tremplin",
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

affichDetails=function () {
    alert('hop')
}



// fonction qui crée une liste html avec ce qu'on lui passe comme paramètre
listeHTML=function(pPrenom,pNom){
    // On sélectionne notre balise <ul> :
    let maListe=document.querySelector('ul');

    // On crée un nouvel élément <li> :
    let monItem=document.createElement('li');
    
    // On crée le contenu de cet élément <li> :
    monItem.textContent=pPrenom+" "+pNom;

    //on ajoute un évènement quand on clqieu sur l'élément de la liste
    monItem.onclick=function() {
        alert(affichDetails())
    };
    
    // On ajoute l'élément <li> à la liste <ul> :
    maListe.appendChild(monItem);
}

// boucle qui passe tous les prénoms et noms du tableau aCarnet à la fonction listeHTML
for (let contact of aCarnet){
    listeHTML(contact);
}

