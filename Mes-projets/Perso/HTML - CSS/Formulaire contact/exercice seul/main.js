let monFormulaire = document.forms.monformulaire;
const input = document.querySelectorAll('input');
let prenomh2 = document.querySelector('h5#prenom');
let nomh2 = document.querySelector('h5#nom');
let mailh2 = document.querySelector('h5#mail');
let passwordh2 = document.querySelector('h5#password');




let monForm = document.forms.monformulaire;

let erreur = false;

monForm.addEventListener('submit', (e) => {

    // On créer une référence vers la valeur du champs prénom dans mon formulaire monformulaire
    let prenom = monForm.prenom.value;
    // Si elle est vide, alors on met erreur à true
    if (prenom == '') {
        erreur = true;
        prenomh2.innerHTML = 'Le champ prénom est vide';
    }



    // Idem pour le nom

    let nom = monForm.nom.value;
    if (nom == '') {
        erreur = true;
        nomh2.innerHTML = 'Le champ nom est vide';
        e.preventDefault();
    }

    // Référence pouir le champs mail
    let mail = monForm.mail.value;
    // IndexOf retourne la position d'un caractère dans une chaine
    // 1 - S'il ne le trouve pas, 0 si c'est le premier caractère
    // Si condition = non, indexOf retourne -1
    if ((mail == '') || (mail.indexOf('@') <= 0) || (mail.indexOf('@') == mail.length - 1)) {
        erreur = true;
        mailh2.innerHTML = 'Le champs mail est vide ou incorect';
        e.preventDefault();
    }

    let mdp = monForm.password.value;

    if ((mdp == '') || (mdp.length < 8)) {
        erreur = true;
        passwordh2.innerHTML = 'Le champs mot de passe contient moins de 8 caractères ou est vide ';
        e.preventDefault();
    }

    else if (erreur = false) {

    }
});