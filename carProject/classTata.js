const Car = require('./classCar.js')

class tatas extends Car {
  accelerate(){
    this.speedOfCar =+ 2;
  }
  deaccelerate(){
    this.speedOfCar -= 1.25;
  }
}
