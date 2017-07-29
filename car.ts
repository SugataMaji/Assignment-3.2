
interface Drivable {
  start :string;
  drive : number;
  getPosition : string;
}

function carDetail ( car : Drivable){
  console.log( ` The car started from Model ${ car.start}, drive ${car.drive}km and reached ${car.getPosition}.`  )
}

let myCar : Drivable = { start : "Bangalore", drive: 300, getPosition :"Chennai"} 
carDetail(myCar);