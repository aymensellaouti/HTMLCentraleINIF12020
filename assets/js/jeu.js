function f1() {
    console.log('cc');
}
function f2() {
    console.log('Comment allez vous');
}
function f3() {
    console.log('je vais très bien')
}
tabMessages= [
    'Cc',
    'Comment allez Vous',
    'Je vais bien',
    'couscous',
    'Qu\'as tu mangé',
    'Tu aimes quel équipes'
];
tabUsers = [
    'aymen',
    'mouna',
    'skander',
    'Khalil',
    'Fabrice',
    'Naomie'
];
tabDisscu = [f1, f2, f3];
function afficheTab(tableau) {
    tableau.forEach(
        (element) => {
            element();
        }
    )
}
afficheTab(tabDisscu);
function getRandomNumber(bsup) {
    return Math.floor(Math.random() * bsup);
}
i = 0;
indInterval = setInterval(
    function () {
        message = tabMessages[getRandomNumber(tabMessages.length)];
        user = tabUsers[getRandomNumber(tabUsers.length)];
        console.log(`${user} : ${message}`);
        if (i == 20) {clearInterval(indInterval);}
        i++;
    },1500
)
