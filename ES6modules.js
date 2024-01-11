//  module = file of a reusable code.
// we can import sections of pre-written code to use whatever we want.
// great for general utility values and functions.
// helps to make your code more reusable and maintainable.
// think of modules as seperate chapters of a book.



// import {PI, getCircumference, getArea} from "./math_util.js";

// console.log(PI);

// let circumference = getCircumference(10);
// console.log(circumference);
// let area = getArea(10);
// console.log(area);


// import * as MathUtil from "./math_util.js";

// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);
// let area = MathUtil.getArea(10);
// console.log(area);

import * as MathUtil from "./math_util.js";

console.log(Math.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);
let area = MathUtil.getArea(10);
console.log(area);