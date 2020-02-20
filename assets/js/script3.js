function interval() {
    setInterval(
        function () {
            console.log('first setInterval');
        },2000);
}
setTimeout( interval, 500);
setInterval(
     () => {
        console.log('Second setInterval');
    }, 1500
);
