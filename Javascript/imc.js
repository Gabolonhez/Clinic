
function calculateImc(weight, height) {
    return weight / Math.pow(height, 2);

} 
function toRankImc(imc) {
    if (imc < 18.5) {
    console.log(" Under weight " + imc.toFixed(2));
    } else if (imc >= 18.5 && imc < 25) {
    console.log("Normal weight " + imc.toFixed(2));
    } else if (imc >= 25 && imc < 30) {
    console.log(" Over weight " + imc.toFixed(2));
    } else if (imc >= 30 && imc < 40) {
    console.log(" Obese " + imc.toFixed(2));
    } else if (imc > 40) {
    console.log(" Severe obesity " + imc.toFixed(2));
    }

} 

function main() {
    let weight = 75;
    let height = 1.90;
    const imc = calculateImc(weight, height);
    console.log(toRankImc(imc));
} 

main(); 