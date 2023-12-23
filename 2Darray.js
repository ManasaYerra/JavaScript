// 2D array = an array of arrays


// let fruits = ["apple","mango","strawberry"];
// let vegetables = ["potato","carrot","onion"];
// let meats = ["eggs","chicken","fish"];

// let groceryList = [fruits, vegetables, meats];

// for(let list of groceryList){
//     console.log(list);
// }

// let fruits = ["apple","mango","strawberry"];
// let vegetables = ["potato","carrot","onion"];
// let meats = ["eggs","chicken","fish"];

// let groceryList = [fruits, vegetables, meats];

// for(let list of groceryList){
//     for(let food of list)
//     console.log(food);
// }

let fruits = ["apple","mango","strawberry"];
let vegetables = ["potato","carrot","onion"];
let meats = ["eggs","chicken","fish"];

let groceryList = [fruits, vegetables, meats];
// groceryList[0][2] = "blueberry";
groceryList[1][1] = "Tomato";
// groceryList[2][2] = "Prawns";
for(let list of groceryList){
    for(let food of list)
    console.log(food);
}