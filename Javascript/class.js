// variable and types of operators
let one = 20 + 10 / 2;
const pi = 3.14;


console.log(one);

// conditionals

const number = 10;

const divisionPer5 = (number % 5) === 0;

if (number === 0) {
    console.log('Invalid number'); 
} else if (number === 5) {
    console.log("Invalid number");
} else if (divisionPer5) { 
    console.log('yes');
} else {
    console.log('not');
}

const number1 = 5;
const isNumberEven = (number1 % 2) === 0;

if (isNumberEven) {
    console.log('The number is even')
} else {
    console.log('The number is odd')
}


// functions

function saymyName(name) {
    console.log('Your name is: ' + name);
}


saymyName(Gabriel); 
saymyName(Gabriela);


function square(value) {
    return value * value;
}

console.log(square(10) + square(10));


function incrementFees(value, feesPercent) {
    const increaseValue = (feesPercent / 100) * value;
    return value + increaseValue;
}

console.log(incrementFees(100, 10));
console.log(incrementFees(100, 20));


function calculateFees() {

}

function main() {
    console.log('Principal program');
    calculateFees();
} 

main();


function calculateImc(weight, height) {
    return height / Math.pow(height, 2);
} 


main = function() {
    console.log(1);
}

main();

(function main() {
    const weight = 75;
    const height = 1.90;

    const imc = calculateImc(weight,height);
    console.log(toRankImc(imc));
})();

const Gabriel = {
    name: 'Gabriel B F'
    age: '18'
}

console.log(Gabriel);
console.log(Gabriel.name);


// objects

const People = {
    name: 'Gabriel B F'
    age: '18'
    describe: function() {
        console.log('My name is Gabriel ${this.name} and my age is ${this.age}');
    };
}

console.log(Gabriel.name);
console.log(Gabriel);

People.describe = function() {
    console.log('My name is Gabriel ${this.name}');
};

People.height = 1.90;

delete People.name;

People.describe();

const atribute = 'age';
console.log(people['name']);
people['name'] = 'test';
people.name = 'test';

// Class

class People {
    name;
    age;
    birthDate;

    constructor() {
        this.name = name;
        this.age = age;
        this.birthDate = 2023 - age;
    }

    describe() {
        console.log('My name isGabriel ${this.name} and my age is ${this.age}');
    }
}

 
const Gabriela = new people('Gabriela', 19);

console.log(Gabriela);

function comparePeople(p1, p2) {
    if (p1.age > p2.age) {
        console.log('${p1.name} is older than ${p2.name}');
    } else if (p1.age < p2.age) {
        console.log('${p2.name} is older than ${p1.name}');
    } else {
        console.log('${p1.name} is the same age as ${p2.name}');
    }
 }

 const Gabriell = new people('Gabriell', 18);
 const Gabriella = new people('Gabriella', 19);

 comparePeople(Gabriella, Gabriell);
 
 // arrays
 const studants = ['Gabriel', 'Gabriela', 'Titi'];

 studants.push('Gabriell');

 studants[4] = 'Titi';

 console.log(studants[4]);

 console.log(studants.shift());


 const plus = grade[0] + grade[1] + grade[2] + grade[3];
 console.log(plus / 3);


 const name = 'Gabriel Bolonhez';
 name.lenght();

 for (let i = 0; i < name.lenght; i++) {
        console.log(name[i]);
 }

 for (let i < name.lenght; i++) {
    const word = name[i];
    console.log(word);
    
 }

 let i = 1;
 i = i + 1; // i++


 const grades = [];

 grade.push(7);
 grade.push(6);
 grade.push(8);
 grade.push(9);

let plus = 0;

 for (let i = 0; i < grade.length; i++) {
    const grade = grades[i];
    plus = plus + grade;
 }

const average = plus / grades.lenght;
console.log(average);
 
