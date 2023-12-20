//return = returns a value back to the place 
//          where you invoked a function.

// let area;
// let width;
// let height;
// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = calculateArea(width, height);
// console.log("The area is : ", area);

// function calculateArea(width, height){
//     let result = width * height;
//     return result;
// }

let Area;
let Width;
let Height;
Width = window.prompt("Enter width");
Height = window.prompt("Enter height");

Area = calculateAreaa(Width, Height);
console.log("The area is : ", Area);

function calculateAreaa(Width, Height){
    return Width * Height;
}


