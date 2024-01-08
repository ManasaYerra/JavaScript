class Car{
    constructor(model,year,colour){
        this.model = model;
        this.year = year;
        this.colour = colour;
    }
}

const car1 = new Car("Mustang",2001,"red",);
const car2 = new Car("Corvette",2006,"grey");
const car3 = new Car("BMW",2016,"black",);

changeColour = (car3, "gold");
// displayInfo(car1);
// displayInfo(car2);
displayInfo(car3);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.colour);
}