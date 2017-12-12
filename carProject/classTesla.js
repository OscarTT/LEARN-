const Car = require('./classCar.js')

class tesla extends Car {
  accelerate(){
    this.speedOfCar =+ 10;
  }
  deaccelerate(){
    this.speedOfCar -= 7;
  }
}
