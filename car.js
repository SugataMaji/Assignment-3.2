function carDetail(car) {
    console.log(" The car started from Model " + car.start + ", drive " + car.drive + "km and reached " + car.getPosition + ".");
}
var myCar = { start: "Bangalore", drive: 300, getPosition: "Chennai" };
carDetail(myCar);
