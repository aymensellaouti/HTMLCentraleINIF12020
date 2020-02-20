function sayHello() {
    console.log('Salut');
}
setTimeout( () => {
    console.log('Salut 2');
}, 2500);
console.log('JE suis synchrone');
i = 5;
indice = setInterval(() => {
    console.log(i--);
    if(i == 0) {
        clearInterval(indice);
    }
}, 1000);

