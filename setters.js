// set = binds an object proprty to a function
//      when that property is assigned a value

// class Car{
//     constructor(power){
//         this._power = power;
//         this._gas = 50;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas}L (${this._gas / 50 * 100}%)`;
//     }
//     set gas(value){
//         this._gas = value;
//     }
// }
// let car = new Car(400);
// car.gas = 100000
// car._power=100000;
// console.log(car.power);
// console.log(car.gas);

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
    set gas(value){
        this._gas = value;
        if(value > 50){
            value = 50;
        }
    }
}
let car = new Car(400);
car.gas = 100000
car._power=100000;
console.log(car.power);
console.log(car.gas);
