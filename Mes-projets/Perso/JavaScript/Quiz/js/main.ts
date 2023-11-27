/*Je prend l'emplacement où je vais mettre mon niveau actuel*/
const niveau = document.querySelector('p#niveau') as HTMLHeadElement;
/*Je prend l'emplacement où je vais indiquer toutes les tentatives*/
const tentatives = document.querySelector('p#tentatives') as HTMLHeadElement;
/*Je prend l'emplacement de ma question, pour écrire ma question*/
const question = document.querySelector('p#question') as HTMLHeadElement;
/*Je prend mon input submit pour lui ajouter une écoute d'évenements qui se feras au moment de cliquer sur celui-ci*/
const submit = document.getElementById('submit') as HTMLHeadElement;
/*Pour indiquer si la réponse est positive ou négative, je prend l'emplacement qui me permettra de définire true ou false*/
const reponsepositiveounegative = document.getElementById('reponsepositiveounegative') as HTMLHeadElement;
/*Je créer une variable qui augmenteras les niveaux et je la met par defaut à 1*/
let monNiveauActuel = 1;
/*Je créer une variable qui calculeras en tant réèl tous les essaie à chaque fois que le joueur clique sur le button submit et je la met par défaut à 0*/
let mesTentativesActuel = 0;
/*Je recupère la valeur qui se trouvera dans l'input ou l'utilisateur mettras sa réponse*/
let reponse = document.getElementById('reponse') as HTMLInputElement;
/*Je prend ma div fin*/
const maDivFin = document.querySelector('#fin') as HTMLHeadElement;
const fin = document.querySelector('#fin p') as HTMLHeadElement;
const buttonfin = document.querySelector('#buttonfin') as HTMLHeadElement;
maDivFin.style.display = 'flex';
fin.innerHTML = `Veuillez entrer la première lettre des mots en majuscule sauf celles avec un accent. <br><br> Vous avez un nombre de tentatives illimitées pour répondre aux questions. <br><br> Bonne chance !`;
buttonfin.addEventListener('click', () => {
    monNiveauActuel = 1;
    maDivFin.style.display = 'none';
});
/*Ma fonction au moment du click sur le boutton submit*/
submit.addEventListener('click', () => {
    /*J'incrémente de 1 ma variable mesTentativesActuel*/
    mesTentativesActuel++;
    /*J'assemble les deux*/
    tentatives.innerHTML = 'Tentatives : ' + mesTentativesActuel.toString();
});


if (monNiveauActuel === 1) {
    /*Je pose ma question de niveau 1*/
    question.innerHTML = `“Il ne suffit pas de parler, il faut parler juste.”`;
    /*Pour vérifier en temps réèle la valeur de l'input*/
    reponse?.addEventListener('input', function (event) {
        const target = event.target as HTMLInputElement;
        /*Au moment de cliquer sur mon boutton submit*/
        submit.addEventListener('click', () => {
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
                question.innerHTML = `Jaune + Bleu`;
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse?.addEventListener('input', function (event) {
                    const target = event.target as HTMLInputElement;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', () => {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === 'Vert') || (target.value === 'Vert ')) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    })
                })
            }
            /*Je met mon autre niveau*/
            if (monNiveauActuel === 3) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = `En combien de temps la Terre tourne-t-elle autour du Soleil ?`;
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse?.addEventListener('input', function (event) {
                    const target = event.target as HTMLInputElement;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', () => {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === '365 jours') || (target.value === '365 jours ') || (target.value === '365 Jours ') || (target.value === '365 Jours')) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    })
                })
            }
            /*Je met mon autre niveau*/
            if (monNiveauActuel === 4) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = `Qui a mis le premier le pied sur la Lune ?`;
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse?.addEventListener('input', function (event) {
                    const target = event.target as HTMLInputElement;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', () => {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === 'Neil Armstrong') || (target.value === 'Neil Armstrong ')) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    })
                })
            }
            /*Je met mon autre niveau*/
            if (monNiveauActuel === 5) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = `Qui à remporté la coupe du monde de football en 1998 ?`;
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse?.addEventListener('input', function (event) {
                    const target = event.target as HTMLInputElement;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', () => {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === `La France`) || (target.value === `La France `) || (target.value === `La france `) || (target.value === `La france`)) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    })
                })
            }/*Je met mon autre niveau*/
            if (monNiveauActuel === 6) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = `2+2 * (5*5) +5 * 3`;
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse?.addEventListener('input', function (event) {
                    const target = event.target as HTMLInputElement;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', () => {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === `315`) || (target.value === `315 `)) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    })
                })
            }

            /*Je met mon autre niveau*/
            if (monNiveauActuel === 7) {
                /*Je pose ma question de niveau 1*/
                question.innerHTML = `Quelle est la phrase favorite d'un développeur ?`;
                /*Pour vérifier en temps réèle la valeur de l'input*/
                reponse?.addEventListener('input', function (event) {
                    const target = event.target as HTMLInputElement;
                    /*Au moment de cliquer sur mon boutton submit*/
                    submit.addEventListener('click', () => {
                        /*Si la valeur de l'input est === à Pouppy*/
                        if ((target.value === `Hello world`) || (target.value === `Hello world `)) {
                            /*Je laisse le champ de l'input n vide pour la prochaine question*/
                            target.value = '';
                            /*Je met le niveau +1*/
                            monNiveauActuel++;
                            /*J'écris mon niveau actuel dans mon p*/
                            niveau.innerHTML = 'Niveau : ' + monNiveauActuel.toString();
                        }
                    })
                })
            }

            if ((monNiveauActuel === 8) && (mesTentativesActuel <= 10)) {
                monNiveauActuel--;
                mesTentativesActuel--;
                maDivFin.style.display = 'flex';
                fin.innerHTML = `Vous avez répondu à ${monNiveauActuel} questions avec ${mesTentativesActuel} Tentatives ! 👌`;
                buttonfin.addEventListener('click', () => {
                    location.reload();
                    monNiveauActuel = 1;
                })
            }

            else if ((monNiveauActuel === 8) && (mesTentativesActuel > 10) && (mesTentativesActuel <= 20)) {
                monNiveauActuel--;
                mesTentativesActuel--;
                maDivFin.style.display = 'flex';
                fin.innerHTML = `Vous avez répondu à ${monNiveauActuel} questions avec ${mesTentativesActuel} Tentatives ! <br><br> Je ne vous juge pas, mais c'est pas foufou 🙊 ...`;
                buttonfin.addEventListener('click', () => {
                    location.reload();
                    monNiveauActuel = 1;
                })

            } else if ((monNiveauActuel === 8) && (mesTentativesActuel > 20)) {
                monNiveauActuel--;
                mesTentativesActuel--;
                maDivFin.style.display = 'flex';
                fin.innerHTML = `Vous avez répondu à ${monNiveauActuel} questions avec ${mesTentativesActuel} Tentatives ! <br><br>Là, faut remettre votre vie en question 🙈 ...`;
                buttonfin.addEventListener('click', () => {
                    location.reload();
                    monNiveauActuel = 1;
                })

            };
        })
    })
};