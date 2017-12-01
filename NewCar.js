// Oscar Trejo and Alex Walsh
// Creates Car object, and assigns the make, model, color.

//Working on linking this function to NewCar object as well as speed.
var myCar = {
    carModel: "458",
    color: "Red",
    make: "Ferrari",
    wholeCar: function(){
        return this.make
        + " " +
        this.carModel
        + " " +
        this.color
        }
    };

myCar.wholeCar()




// Allows calculation of speed, acceleration, and stopping.
function createNewCar(){
    var speed = 0
    return{
        getSpeed: function() {return speed },
        Acceleration: function() {speed += 10},
        Stopping: function() {speed -= 7},
        upToFifty: function() { //Created loop to add 1 to value, as long as it is <50.
            while (speed < 50 ) {
                speed++;
            }

        }
        }
};

var NewCar = createNewCar() //Saves createNewCar function to NewCar variable.

while (NewCar.getSpeed() > 0){ // Calls getSpeed value from createNewCar function and
    //checks Boolean to see if statement is true.
    NewCar.getSpeed();
    NewCar.Stopping(); //Applys Stopping function to getSpeed value
}








//Code from here on is broken.



while (NewCar.getSpeed() > 0) { //Is attempting to stop car at 0, but not past.
    if (NewCar.getSpeed == 0){
        return NewCar.getspeed(){
            return NewCar.getSpeed()
        }

    }
}
//Current output: -6
