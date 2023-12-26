// array.reduce() = reduces an array to a single value.

// let prices = [20,30,50,70,90,100];
// let total = prices.reduce(checkOut);
// function checkOut(total,element){
//     return total + element;
// }
// console.log("the total is : ", total , "$");


let prices = [20,30,50,70,90,100];
let total = prices.reduce(checkOut);
console.log('The total is: $',total);
function checkOut(total,element){
    return total + element;
}
