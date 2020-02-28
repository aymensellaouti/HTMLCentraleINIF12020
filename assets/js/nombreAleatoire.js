function getRandomNumber(bsup) {
    return Math.floor(Math.random() * bsup);
}
function deviner(nombreIteration = 3, bsup = 20) {
    nombre = getRandomNumber(bsup);
    alert('Vous allez commencer à jouer vous avez '+ nombreIteration + ' tentatives '+ nombre );
    while(nombreIteration > 0) {
        tentative = prompt('Donner une tentative : ');
        if (tentative == nombre) {
            alert('Bravo tu as gagné');
            break;
        } else if (tentative > nombre) {
            alert('chercher un nombre plus petit');
        } else {
            alert('chercher un nombre plus grand');
        }
        nombreIteration -- ;
    }
    if (nombreIteration == 0 ) {
        alert('Vous avez perdu :(');
    }

}

isplaying = true;

while (isplaying) {
    deviner();
    isplaying = confirm('Voulez vous rejouer');
}
