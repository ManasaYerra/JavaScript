class Car{
    constructor(model,year,colour){
        this.model = model;
        this.year = year;
        this.colour = colour;
    }
    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang",2001,"red",);
const car2 = new Car("Corvette",2006,"grey");
const car3 = new Car("BMW",2016,"black",);

const cars = [car1, car2, car3];

// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();
startRace(cars);
function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}