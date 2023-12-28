// arrow function = compact alternative to a 
//                  traditional function expression.

// const greeting = function(userName){
//     console.log(`Hello ${userName}`);
// }
// greeting("bro")

const greeting = (userName) => console.log(`Hello ${userName}`);
greeting("bro")


// const percent = function(x,y){
//     return x / y * 100;
// }
// console.log(`${percent(75,100)}%`);

const percent = (x,y) => x / y * 100;
console.log(`${percent(75,100)}%`);

let grades = [90,60,46,70,95,80];
grades.sort((x,y) => y - x );
grades.forEach((element) => console.log(element));