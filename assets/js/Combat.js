let Personnage = {
    name : 'fake',
    vie : 20,
    force: 3,
    interationAs : 2,
    coeffAS: 3,
    attaquer: function (adversaire) {
        const attaque = Math.floor(Math.random()*this.force) + 1;
        adversaire.vie -= attaque;
        console.log(`
        ---------------------------------------------------------------------
        ${this.name} a attaqué ${adversaire.name}, il lui a infligé ${attaque} dégats 
        Sa nouvelle vie est ${adversaire.vie}
        `)
    },
    attaqueSpeciale: function (adversaire) {

    },
    combattre: function(adversaire) {

    },
    whoAmI: function () {
        console.log(`
            Je suis ${this.name}, ma force est : ${this.force} et mon niveau de vie est 
            ${this.vie}
        `)
    }
};

Personnage.whoAmI();
