class people {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateImc() {
        return this.weight / (this.height * this.height);
    }

    classifyImc() {
        const imc = this.calculateImc();
        if (imc < 18.5) {
            return(" Under weight " + imc.toFixed(2));
            } else if (imc >= 18.5 && imc < 25) {
            return("Normal weight " + imc.toFixed(2));
            } else if (imc >= 25 && imc < 30) {
            return(" Over weight " + imc.toFixed(2));
            } else if (imc >= 30 && imc < 40) {
            return(" Obese " + imc.toFixed(2));
            } else if (imc > 40) {
            return(" Severe obesity " + imc.toFixed(2));
        }

    }
}

const gabriel = new people('gabriel', 73, 1.90);
console.log(gabriel.classifyImc());    

