// object = a group of properties and methods
//          properties = what an object has 
//           methods = what an object can do
// -> used to access properties/methods.

const car = {
    model:"Mustang",
    colour:"Black",
    year:2012,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    },
}
console.log(car.model);
console.log(car.colour);
console.log(car.year);

car.drive();
car.brake();