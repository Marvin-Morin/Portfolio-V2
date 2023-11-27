/*SCORE*/
let score = 0 as number;
/*Ma div pour afficher le score*/
const scoreActuel = document.querySelector('#scoreActuel') as HTMLHeadingElement;
/*NIVEAU*/
let niveau = 1 as number;
/*Ma div pour afficher les niveaux*/
const niveaux = document.querySelector('#niveaux') as HTMLHeadingElement;
/*Bouton red*/
const red = document.querySelectorAll('.red');
/*Function GameOver (si le joueur survol une div rouge)*/
function gameOver(element: Element) {
    /*Au moment du survol de la souris*/
    element.addEventListener('mouseover', () => {
        /*Je mets -1 au score*/
        score--;
        /*J'écrit mon score dans ma div scoreActuel*/
        scoreActuel.innerHTML = score.toString();
        /*Pour que l'utilisateur ai le temps de voir la div rouge*/
        setTimeout(() => {
            alert('Game Over !');
        }, 100);
    });
};
/*Mon tableau des div rouge*/
for (let index = 0; index < red.length; index++) {
    gameOver(red[index]);
};

/*EXIT*/

/*Ma div exit*/
const exit = document.querySelectorAll('.exit');
/*La fonction qui va permettre de passer au niveau suivant*/
/*Mon tableau exit*/
exit.forEach(element => {
    element.addEventListener('mouseover', () => {
        /*J'augmente mon niveau*/
        niveau++;
        console.log(niveau);
        /*J'écrit mon niveau dans ma div faite pour*/
        niveaux.innerHTML = 'Niveau :' + " " + niveau.toString();
        /*Pour que l'utilisateur ai le temps de voir la div exit*/
        setTimeout(() => {
            alert('Bien joué ! Tu passe au niveau suivant');
            /*J'augmente mon score*/
            score++;
            /*J'écrit mon score dans ma div faite pour*/
            scoreActuel.innerHTML = score.toString();
        }, 100);

        /*Mes conditions pour passer au niveau suivant*/

        const niveau1 = document.querySelector('#un') as HTMLHeadingElement;
        /*Mon Niveau 2*/
        const niveau2 = document.querySelector('#deux') as HTMLHeadingElement;
        /*Si mon niveau est égale à deux*/
        if (niveau === 2) {
            /*Je met mon animation back au niveau 1 afin qu'il ne soit plus visible*/
            niveau1.classList.add('animNiveauBack');
            /*Je met mon niveau deux en display flex afin qu'il soit visible*/
            niveau2.style.display = 'flex';
        };
        const niveau3 = document.querySelector('#trois') as HTMLHeadingElement;
        if (niveau === 3) {
            /*Je met mon animation back au niveau 1 afin qu'il ne soit plus visible*/
            niveau2.classList.add('animNiveauBack');
            /*Je met mon niveau deux en display flex afin qu'il soit visible*/
            niveau3.style.display = 'flex';
        };
    })
});
