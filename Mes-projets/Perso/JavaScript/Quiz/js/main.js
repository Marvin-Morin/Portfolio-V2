/*Je prend l'emplacement où je vais mettre mon niveau actuel*/
var niveau = document.querySelector('p#niveau');
/*Je prend l'emplacement où je vais indiquer toutes les tentatives*/
var tentatives = document.querySelector('p#tentatives');
/*Je prend l'emplacement de ma question, pour écrire ma question*/
var question = document.querySelector('p#question');
/*Je prend mon input submit pour lui ajouter une écoute d'évenements qui se feras au moment de cliquer sur celui-ci*/
var submit = document.getElementById('submit');
/*Pour indiquer si la réponse est positive ou négative, je prend l'emplacement qui me permettra de définire true ou false*/
var reponsepositiveounegative = document.getElementById('reponsepositiveounegative');
/*Je créer une variable qui augmenteras les niveaux et je la met par defaut à 1*/
var monNiveauActuel = 1;
/*Je créer une variable qui calculeras en tant réèl tous les essaie à chaque fois que le joueur clique sur le button submit et je la met par défaut à 0*/
var mesTentativesActuel = 0;
/*Je recupère la valeur qui se trouvera dans l'input ou l'utilisateur mettras sa réponse*/
var reponse = document.getElementById('reponse');
/*Je prend ma div fin*/
var maDivFin = document.querySelector('#fin');
var fin = document.querySelector('#fin p');
var buttonfin = document.querySelector('#buttonfin');
maDivFin.style.display = 'flex';
fin.innerHTML = "Veuillez entrer la premi\u00E8re lettre des mots en majuscule sauf celles avec un accent. <br><br> Vous avez un nombre de tentatives illimit\u00E9es pour r\u00E9pondre aux questions. <br><br> Bonne chance !";
buttonfin.addEventListener('click', function () {
    monNiveauActuel = 1;
    maDivFin.style.display = 'none';
});
/*Ma fonction au moment du click sur le boutton submit*/
submit.addEventListener('click', function () {
    /*J'incrémente de 1 ma variable mesTentativesActuel*/
    mesTentativesActuel++;
    /*J'assemble les deux*/
    tentatives.innerHTML = 'Tentatives : ' + mesTentativesActuel.toString();
});
if (monNiveauActuel === 1) {
    /*Je pose ma question de niveau 1*/
    question.innerHTML = "“Il ne suffit pas de parler, il faut parler juste.”";
    /*Pour vérifier en temps réèle la valeur de l'input*/
    reponse === null || reponse === void 0 ? void 0 : reponse.addEventListener('input', function (event) {
        var target = event.target;
        /*Au moment de cliquer sur mon boutton submit*/
        submit.addEventListener('click', function () {
            /*Si la valeur de l'input est === à Pouppy*/
            if ((target.value === 'William Shakespeare') || (target.value === 'William Shakespeare ')) {
                /*Je laisse le champ de l'input vide pour la prochaine question*/
                target.value = '';
                /*Je met le niveau +1*/
                monNiveauActuel++;
                /*J'écris mon niveau actuel dans mon p*/
                niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
            }
            /*Je met mon autre niveau*/
            if (monNiveauActuel === 2) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = "Jaune + Bleu";
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse === null || reponse === void 0 ? void 0 : reponse.addEventListener('input', function (event) {
                    var target = event.target;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', function () {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === 'Vert') || (target.value === 'Vert ')) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    });
                });
            }
            /*Je met mon autre niveau*/
            if (monNiveauActuel === 3) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = "En combien de temps la Terre tourne-t-elle autour du Soleil ?";
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse === null || reponse === void 0 ? void 0 : reponse.addEventListener('input', function (event) {
                    var target = event.target;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', function () {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === '365 jours') || (target.value === '365 jours ') || (target.value === '365 Jours ') || (target.value === '365 Jours')) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    });
                });
            }
            /*Je met mon autre niveau*/
            if (monNiveauActuel === 4) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = "Qui a mis le premier le pied sur la Lune ?";
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse === null || reponse === void 0 ? void 0 : reponse.addEventListener('input', function (event) {
                    var target = event.target;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', function () {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === 'Neil Armstrong') || (target.value === 'Neil Armstrong ')) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    });
                });
            }
            /*Je met mon autre niveau*/
            if (monNiveauActuel === 5) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = "Qui \u00E0 remport\u00E9 la coupe du monde de football en 1998 ?";
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse === null || reponse === void 0 ? void 0 : reponse.addEventListener('input', function (event) {
                    var target = event.target;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', function () {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === "La France") || (target.value === "La France ") || (target.value === "La france ") || (target.value === "La france")) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    });
                });
            } /*Je met mon autre niveau*/
            if (monNiveauActuel === 6) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = "2+2 * (5*5) +5 * 3";
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse === null || reponse === void 0 ? void 0 : reponse.addEventListener('input', function (event) {
                    var target = event.target;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', function () {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === "315") || (target.value === "315 ")) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    });
                });
            }
            /*Je met mon autre niveau*/
            if (monNiveauActuel === 7) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = "Quelle est la phrase favorite d'un d\u00E9veloppeur ?";
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse === null || reponse === void 0 ? void 0 : reponse.addEventListener('input', function (event) {
                    var target = event.target;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', function () {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === "Hello world") || (target.value === "Hello world ")) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    });
                });
            }
            if ((monNiveauActuel === 8) && (mesTentativesActuel <= 10)) {
                monNiveauActuel--;
                maDivFin.style.display = 'flex';
                fin.innerHTML = "Vous avez r\u00E9pondu \u00E0 ".concat(monNiveauActuel, " questions avec ").concat(mesTentativesActuel, " Tentatives ! \uD83D\uDC4C");
                buttonfin.addEventListener('click', function () {
                    location.reload();
                    monNiveauActuel = 1;
                });
            }
            else if ((monNiveauActuel === 8) && (mesTentativesActuel > 10) && (mesTentativesActuel <= 20)) {
                monNiveauActuel--;
                maDivFin.style.display = 'flex';
                fin.innerHTML = "Vous avez r\u00E9pondu \u00E0 ".concat(monNiveauActuel, " questions avec ").concat(mesTentativesActuel, " Tentatives ! <br><br> Je ne vous juge pas, mais c'est pas foufou \uD83D\uDE4A ...");
                buttonfin.addEventListener('click', function () {
                    location.reload();
                    monNiveauActuel = 1;
                });
            }
            else if ((monNiveauActuel === 8) && (mesTentativesActuel > 20)) {
                monNiveauActuel--;
                maDivFin.style.display = 'flex';
                fin.innerHTML = "Vous avez r\u00E9pondu \u00E0 ".concat(monNiveauActuel, " questions avec ").concat(mesTentativesActuel, " Tentatives ! <br><br>L\u00E0, faut remettre votre vie en question \uD83D\uDE48 ...");
                buttonfin.addEventListener('click', function () {
                    location.reload();
                    monNiveauActuel = 1;
                });
            }
            ;
        });
    });
}
;
