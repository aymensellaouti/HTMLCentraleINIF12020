const countries = [
    'Tunisie',
    'Cameroun',
    'Algérie',
    "Cote d'ivoir",
    'Senegal',
    "Mali",
    "Maroc"
];
const name = 'aymen';
let i = 0;
// console.log("Bonjour" + name + 'bienvenu');
// console.log(`Bonjour ${name} bienvenu `);
const ol = document.querySelector('#country');
const indice = setInterval(function () {
    ol.innerHTML += `<li>
        ${countries[i++]}
        </li>`;
    if (i == countries.length) {
        clearInterval(indice);
        // i = 0;
        // ol.innerHTML = '';
    }
}, 500);
