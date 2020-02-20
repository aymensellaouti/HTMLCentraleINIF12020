/*
*
* Bonjour le monde
* Indices des Occurences de "on" dans cette chaines
* */

chaine = "Bonjour le monde";
function allOccurences(chaine1, chaine2) {
    pos = 0;
    while(pos!=-1) {
        pos = chaine1.indexOf(chaine2, pos);
        if(pos != -1) {
            console.log(pos);
            pos+=chaine2.length
        }
    }
}
//allOccurences(chaine, "on");
var scope = "globale";
function f() {
    var scope;
    console.log(scope);
    scope = "locale";
    console.log(scope);
}
//f();
tab = [1, 'test', scope];
tab2 = [3,77,8];
tab3 = tab.concat(tab2);
console.log(tab3);
// for (i in tab) {
//     console.log('tab[' + i + ']=' + tab[i]);
//     console.log(`tab[${i}]=${tab[i]}`);
// }
function compare(a,b) {
    return b-a;
}
tab4= [1,11,21,2,123,4,34];
tab4.sort(compare);
afficheTab(tab4);

function afficheTab(tableau) {
    tableau.forEach(
         (valAct, ind) => {
             console.log(`tab[${ind}]=${valAct}`);
        }
    )
}
