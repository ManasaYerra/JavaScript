//Spread Operator = allows an iterable such as an array or string
//                  to be expanded in places where zero or more 
//                  aguments are expected

let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);

let userName = "Manasa";
let num = [6, 9, 2002];
console.log(...userName);

let Num = [1,3,5,7,9];
let maximum = Math.max(...Num);
console.log(maximum);

let class1 = ["A","B","C"];
let class2 = ["D","E","F"];

class1.push(...class2);
console.log(...class1);