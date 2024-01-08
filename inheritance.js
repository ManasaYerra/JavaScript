// inheritance = a child class can inherit all the 
//           methods and properties from another class.
// super = refers to the parent class
//-> commonly used to invoke constructor of a parent class.

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    // alive = true;
    name = "rabbit";
    // eat(){
    //     console.log(`This ${this.name} is eating`);
    // }
    // sleep(){
    //     console.log(`This ${this.name} is sleeping`);
    // }
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    // alive = true;
    name = "fish";
    // eat(){
    //     console.log(`This ${this.name} is eating`);
    // }
    // sleep(){
    //     console.log(`This ${this.name} is sleeping`);
    // }
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    // alive = true;
    name = "hawk";
    // eat(){
    //     console.log(`This ${this.name} is eating`);
    // }
    // sleep(){
    //     console.log(`This ${this.name} is sleeping`);
    // }
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();


class Aanimal{
    constructor(name,age){
      this.name = name;
      this.age = age;  
    }
}
class Rabbit extends Aanimal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}
class Fish extends Aanimal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Aanimal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }
}
const rabbit1 = new Rabbit("rabbit",1,40);
const fish2 = new Fish("rabbit",1,60);
const hawk3 = new Hawk("rabbit",1,80);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
