class hero {

    constructor(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
    }

    attack() {
        let attack = this.getAttack();
        console.log(`The ${this.type} attacked using ${attack}`);
    }

    getAttack() {
        switch (this.type) {
            case "mage":
                return "magic";
            case "warrior":
                return "sword";
            case "monk":
                return "martial arts";
            default:
                return "shuriken";
        }
    }
}

let mage = new hero("Magezar", 150, "mage");
let warrior = new hero("Warriozar", 50, "warrior");
let monk = new hero("Monkazar", 300, "monk");
let ninja = new hero("Ninjazar", 35, "ninja");

mage.attack()
warrior.attack()
monk.attack()
ninja.attack()





