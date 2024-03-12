class Car {
    brand;
    color;
    averageSpentPerKm;


    constructor (brand, color, averageSpentPerKm) {
        this.brand = brand;
        this.color = color;
        this.averageSpentPerKm = averageSpentPerKm;
    }


    calculateRouteSpent(distance, fuelPrice) {
      return distance * this.averageSpentPerKm * fuelPrice;
    }

}

const CompassLongitude = new Car ('Jeep', 'black', 1 / 12);
console.log(CompassLongitude.calculateRouteSpent(100, 5));
const proHybrid = new Car ('Tiggo','Black', 1 / 12);
console.log(proHybrid.calculateRouteSpent(50,5));