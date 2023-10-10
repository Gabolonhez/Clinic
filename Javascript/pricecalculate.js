function priceCalculate(value,descount) {
    return (productPrice - (value * (descount / 100)));
}

function calculateFees(value, fees) {
    return (value * (value * (fees / 100)));
}

const productPrice = 149.99;
let paymentForm = 2;

if (paymentForm === 1) {
    console.log(priceCalculate(productPrice, 10));
} else if (paymentForm === 2) {
    console.log(priceCalculate(productPrice, 15));
} else if (paymentForm === 3) {
    console.log(productPrice);
} else if (paymentForm === 4 ) {
    console.log(priceCalculate(productPrice, 10));
}


