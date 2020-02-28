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
        const attaque = Math.floor(Math.random()*this.force) + 1;
        adversaire.vie -= attaque * this.coeffAS;
        console.log(`
        ---------------------------------------------------------------------
        ${this.name} a effectué une attaque spéciale sur ${adversaire.name}, il lui a infligé ${attaque * this.coeffAS} dégats 
        Sa nouvelle vie est ${adversaire.vie}
        `)

    },
    combattre: function(adversaire) {
        i = 1;
        indiceInterval = setInterval(
            function () {
               if(i === this.interationAs) {
                   this.attaqueSpeciale(adversaire);
               } else {
                   this.attaquer(adversaire);
               }
                if(i === adversaire.interationAs) {
                    adversaire.attaqueSpeciale(this);
                } else {
                    adversaire.attaquer(this);
                }
                i++;
                if (this.vie <=0 || adversaire.vie <=0) {
                    if(this.vie > adversaire.vie) {
                        console.log(`${this.name} a gagné`);
                    } else if (this.vie == adversaire.vie) {
                        console.log(`Pas de vainqeur`);
                    } else {
                        console.log(`${adversaire.name} a gagné`);
                    }
                } clearInterval(indInterval);
            },1500
        );
    },
    whoAmI: function () {
        console.log(`
            Je suis ${this.name}, ma force est : ${this.force} et mon niveau de vie est 
            ${this.vie}
        `)
    }
};

let aymen = Object.create(Personnage);
let yasser = Object.create(Personnage);

aymen.name = 'aymen';
yasser.name = 'yasser';

aymen.combattre(yasser);
