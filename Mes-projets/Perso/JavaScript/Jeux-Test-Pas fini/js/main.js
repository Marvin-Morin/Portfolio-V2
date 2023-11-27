/*SCORE*/
var score = 0;
/*Ma div pour afficher le score*/
var scoreActuel = document.querySelector('#scoreActuel');
/*NIVEAU*/
var niveau = 1;
/*Ma div pour afficher les niveaux*/
var niveaux = document.querySelector('#niveaux');
/*Bouton red*/
var red = document.querySelectorAll('.red');
/*Function GameOver (si le joueur survol une div rouge)*/
function gameOver(element) {
    /*Au moment du survol de la souris*/
    element.addEventListener('mouseover', function () {
        /*Je mets -1 au score*/
        score--;
        /*J'écrit mon score dans ma div scoreActuel*/
        scoreActuel.innerHTML = score.toString();
        /*Pour que l'utilisateur ai le temps de voir la div rouge*/
        setTimeout(function () {
            alert('Game Over !');
        }, 100);
    });
}
;
/*Mon tableau des div rouge*/
for (var index = 0; index < red.length; index++) {
    gameOver(red[index]);
}
;
/*EXIT*/
/*Ma div exit*/
var exit = document.querySelectorAll('.exit');
/*La fonction qui va permettre de passer au niveau suivant*/
/*Mon tableau exit*/
exit.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        /*J'augmente mon niveau*/
        niveau++;
        console.log(niveau);
        /*J'écrit mon niveau dans ma div faite pour*/
        niveaux.innerHTML = 'Niveau :' + " " + niveau.toString();
        /*Pour que l'utilisateur ai le temps de voir la div exit*/
        setTimeout(function () {
            alert('Bien joué ! Tu passe au niveau suivant');
            /*J'augmente mon score*/
            score++;
            /*J'écrit mon score dans ma div faite pour*/
            scoreActuel.innerHTML = score.toString();
        }, 100);
        /*Mes conditions pour passer au niveau suivant*/
        var niveau1 = document.querySelector('#un');
        /*Mon Niveau 2*/
        var niveau2 = document.querySelector('#deux');
        /*Si mon niveau est égale à deux*/
        if (niveau === 2) {
            /*Je met mon animation back au niveau 1 afin qu'il ne soit plus visible*/
            niveau1.classList.add('animNiveauBack');
            /*Je met mon niveau deux en display flex afin qu'il soit visible*/
            niveau2.style.display = 'flex';
        }
        ;
        var niveau3 = document.querySelector('#trois');
        if (niveau === 3) {
            /*Je met mon animation back au niveau 1 afin qu'il ne soit plus visible*/
            niveau2.classList.add('animNiveauBack');
            /*Je met mon niveau deux en display flex afin qu'il soit visible*/
            niveau3.style.display = 'flex';
        }
        ;
    });
});
