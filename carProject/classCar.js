class Car{
  constructor(model, modelYear, lightStatus, turnRightSignal, turnleftSignal, speedOfCar, accelerate,deaccelerate){
      this.wheels= 4,
      this.model = model,
      this.modelYear = modelYear,
      this.lightStatus = "Off",
      this.turnRightSignal = "Off",
      this.turnleftSignal = "Off",
      this.speedOfCar = 0,
      this.accelerate = accelerate,
      this.deaccelerate = deaccelerate
    }
    lightOn(){
      this.lightStatus = "On";
    }
    lightOff(){
      this.lightStatus = "Off";
    }
    turnRight(){
      this.turnSignal = true;
    }
    turnLeft(){
      this.turnleftSignal = true;
    }
    speed(){
      this.speedOfCar = 0;
    }

  }
  var myCar = new Car ("accord", 2019)
  console.log(myCar)

  module.exports = Car;
