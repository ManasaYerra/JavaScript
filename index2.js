//constant
// let pi = 3.14;
// const PI = 3.14;
// let radius;
// let circumference;

// radius=window.prompt("Enter the radius");
// radius=Number(radius);

// circumference= 2 * PI * radius;
// console.log("The circumference is ", circumference)

//math
 
let x=2.8;
// x=Math.round(x);
// x=Math.floor(x);
// x=Math.ceil(x);
// x=Math.pow(x,2);
// x=Math.sqrt(x);
x=Math.abs(x);
console.log(x);

let a=2;
let b=6;
let c=8;
let maximum;
let minimum;
// maximum=Math.max(a,b,c);
// console.log(maximum);
minimum=Math.min(a,b,c);
console.log(minimum);

let m;
let n=23;
m=Math.PI;
console.log(m);

//string Methods
let userName = "Manasa Yerra";
console.log(userName.length);

let firstLetter = userName.charAt(0);
console.log(firstLetter);

console.log(firstLetter = userName.charAt(4));

console.log(firstLetter = userName.indexOf("s"));
console.log(firstLetter = userName.lastIndexOf("r"));

let user = "   Ammu  ";
user = user.trim();
user = user.toUpperCase();
user = user.toLowerCase();
console.log(user);

let phnNum = "830-957-6275";
phnNum = phnNum.replace("-","*");
phnNum = phnNum.replaceAll("-","*");
console.log(phnNum);

//string slicing
// let fullName = "Virat kohli";
// let firstName;
// let lastName;
// lastName = fullName.slice(6);
// console.log(lastName);
// firstName = fullName.slice(0, 5);
// console.log(firstName);

let fullName = "Pawan kalyan";
let firstName;
let lastName;
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice( fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);