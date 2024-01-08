// this = reference to a particular object
//        the object depends on the immediate context.

const car1 = {
    model:"Mustang",
    colour:"Black",
    year:2002,
    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}
const car2 = {
    model:"corvertte",
    colour:"Grey",
    year:2004,
    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}


this.name = "ManasaYerra";
console.log(this.name);