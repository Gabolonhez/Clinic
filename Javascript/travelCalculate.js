const etanolPrice = 4.84;
const gasPrice = 5.84;
const KmPerLiters = 9.6; 
const distanceKm = 100; 
const fuelType = 'Gas';

const consumedLiters = distanceKm / KmPerLiters;


if (fuelType === 'Etanol') {
    const spentValue = consumedLiters * etanolPrice;
    console.log(spentValue.toFixed(2));
} else {
    const spentValue = consumedLiters * gasPrice;
    console.log(spentValue.toFixed(2));
}



