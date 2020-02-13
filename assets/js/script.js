

setTimeout( () => {
    console.log('bonjour');
}, 2000);
console.log('Je viens apres le timeout');
i = 10;
code = setInterval(() => {
    console.log(i--);
    if (i == 0) {clearInterval(code);}
},1000);
