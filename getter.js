// get = binds an object property to a function 
//      when that property is accessed.

// class Car{
//     constructor(power){
//         this.power = power;
//     }
// }
// let car = new Car(400);
// console.log(car.power + "hp");

// class Car{
//     constructor(power){
//         this._power = power;
//     }
//     get power(){
//         return this._power;
//     }
// }
// let car = new Car(400);
// car._power=100000;
// console.log(car.power + "hp");

// class Car{
//     constructor(power){
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
// }
// let car = new Car(400);
// car._power=100000;
// console.log(car.power);

class Car{
    constructor(power){
        this._power = power;
        this._gas = 50;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
}
let car = new Car(400);
car._power=100000;
console.log(car.power);
console.log(car.gas);
