const { gets, print } = require("./get_print");

const grossSalary = gets();
const benefitsValue = gets();

function calculatePercentage(value, percentage) {
  return value * (percentage / 100);
}

function taxRate(salary) {
  if (salary >= 0.0 && salary <= 1100) {
    return 5;
  } else if (salary >= 1100.01 && salary <= 2500) {
    return 10;
  } else {
    return 15;
  }
}
const feeBasedOnSalary = taxRate(grossSalary); 
const feeValue = calculatePercentage(grossSalary, feeBasedOnSalary); 
const valueToTransfer = grossSalary - feeValue + benefitsValue;

print(valueToTransfer);
