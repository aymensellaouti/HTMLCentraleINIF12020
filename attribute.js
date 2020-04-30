const lien = document.querySelector('a');

const monLien = prompt('veuillez donner le lien de votre site web');

// console.log(lien.getAttribute('href'));
console.log(lien.href);
// lien.setAttribute('href', monLien);
lien.href = monLien;
