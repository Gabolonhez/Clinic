const salaryValue = parseFloat(gets());
const benefitsValue = parseFloat(gets());

const feeValue = feeCalculate(salaryValue);

const output = salaryValue - feeValue + benefitsValue;
print(output.toFixed(2));

function feeCalculate(salary) {
    let alíquota;
    if (salary >= 0 && salary <= 1100) {
        alíquota = 0.05;
    } else if (salaryValue >= 1100.01 && salaryValue <= 2500.00) {
        feeValue = 0.10;
    } else {
        feeValue = 0.15;
    }
    return alíquota * salary;
}