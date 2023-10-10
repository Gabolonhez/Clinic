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

const Gabriel = (
    name: 'Gabriel B F'
    age: '18'
);

console.log(Gabriel);
console.log(Gabriel.name);


