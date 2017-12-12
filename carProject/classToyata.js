const Car = require('./classCar.js')

class toyota extends Car {
  accelerate(){
    this.speedOfCar =+ 7;
  }
  deaccelerate(){
    this.speedOfCar -= 5;
  }

}
var myToyota = new toyota ("Carola", 2016)

console.log(myToyota)
