//  static = belongs  to the class,not for the objects
// -> properties = useful for caches,fixed configuration
// -> methods = useful for utility functions

// class car{
//     numberOfCars = 0;
//     constructor(model){
//         this.model=model;
//         this.numberOfCars += 1;
//     }
// }

// const car1 = new car("Mustang");
// const car2 = new car("corvette");
// const car3 = new car("BMW");

// console.log(car1.numberOfCars);
// console.log(car2.numberOfCars);
// console.log(car3.numberOfCars);

class Car{
    static numberOfCars = 0;
    constructor(model){
        this.model=model;
        Car.numberOfCars += 1;
    }
    startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);

car1.startRace();