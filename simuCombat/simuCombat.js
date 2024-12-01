//Simulateur combat//

class Guerrier {
    constructor(name, health, attack, precision) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.precision = precision;
    }
    getName() {
        return (this.name);
    }
    getAttack() {
        return (this.attack);
    }
    getHealth() {
        return (this.health);
    }
    getPrecision() {
        return (this.precision);
    }
    blessure(guerrier) {
        return (guerrier.health -= this.attack);
    }
    testPrecision() {
        return Math.random() < this.precision;
    }
}

var taylor = new Guerrier("Taylor", 5, 5, 0.6);
var john = new Guerrier("John", 10, 4, 0.5);


console.log("Début du combat");
var i = 1
while (taylor.getHealth() > 0 && john.getHealth() > 0) {
    console.log("Tour numéro ", i);
    if (taylor.testPrecision()) {
        taylor.blessure(john);
        console.log(taylor.getName(), "attaque");
    }
    else {
        console.log(taylor.getName(), "n'attaque pas");
    }

    if (john.getHealth() <= 0) {
        console.log(taylor.getName(), "a ", taylor.getHealth(), "PV et ", john.getName(), "a ", john.getHealth(), "PV");
        console.log(taylor.getName(), "a gagné");
        break
    }
    else {
        if (john.testPrecision()) {
            john.blessure(taylor);
            console.log(john.getName(), "attaque");
        }
        else {
            console.log(john.getName(), "n'attaque pas");
        }
    }
    i++
    console.log(taylor.getName(), "a ", taylor.getHealth(), "PV et ", john.getName(), "a ", john.getHealth(), "PV");
}

if (taylor.getHealth() <= 0) {
    console.log(john.getName(), "a gagné");
}
