// represents an indefinite number of parameters

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

// console.log(sum(a,b));
// function sum2(a,b){
//     return a+b;
// }
// function sum3(a,b,c){
//     return a+b+c;
// }
// function sum4(a,b,c,d){
//     return a+b+c+d;
// }

console.log(sum(a,b));
function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}

console.log(sum(a,b,c));
function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}


console.log(sum(a,b,c,d));
function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}

console.log(sum(a,b,c,d,e));
function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}

console.log(sum(a,b,c,d,e
    ));
function sum(x,y, ...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}