const ol = document.querySelector('ol');
function getRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
let child = ol.firstElementChild;
const ind = setInterval(
    function () {
        if(child) {
            child.style.color = getRandomColor();
            child = child.nextElementSibling;
        } else {
            child = ol.firstElementChild;
        }
    }, 1000
);

const body = document.querySelector('body');
console.log(body);
const title = document.createElement('h1');
title.innerHTML = 'Liste des Continents';
body.insertBefore(title, body.firstChild);
const amerique = document.querySelector("#amerique");
console.log(amerique.parentElement);
const newContinent = document.createElement('li');

newContinent.innerHTML ='Une petite pause';
amerique.parentElement.insertBefore(newContinent, amerique);
