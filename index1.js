console.log("Heyyy!!! Good Morning");
console.log("Have a nice day!");

// window.alert("Boooo!!")

// let firstName;
// firstName="Manasa.Y";
// console.log(name);

// let firstName="Manasa.Y";
// console.log(firstName);

// let firstName="Manasa";
// let age=21;
// let student=true;
// console.log(firstName); //string
// console.log(age); //number
// console.log(student); //boolean

// let age=21;
// age=age+1;
// console.log(age);

// let age=21;
// console.log("age");

// let firstName="Manasa";
// let age=21;
// let student=true;
// console.log("Hello!! My name is" ,firstName); //string
// console.log("I am", age ,"years old"); //number
// console.log("enrolled", student); //boolean

// document.getElementById("p1").innerHTML="Hello! My name is " + firstName;
// document.getElementById("p2").innerHTML="I am " + age + "years old.";
// document.getElementById("p3").innerHTML="Enrolled : " + student;

// let iceCreams=20;
// iceCreams = iceCreams + 1;
// iceCreams = iceCreams - 1;
// iceCreams = iceCreams * 2;
// iceCreams = iceCreams / 2;
// iceCreams = iceCreams % 2;
// console.log(iceCreams);

let extraIcecreams=20;
extraIcecreams = extraIcecreams % 3;
console.log(extraIcecreams);

let iceCreams=20;
// iceCreams += 1;
// iceCreams -= 1;
// iceCreams *= 2;
// iceCreams /= 2;
iceCreams %= 3;
console.log(iceCreams);
//operator precedence
//parenthesis(), exponents, addition ,subtraction, mutliplication, division, modulus operation

// let result = 1 + 2 * (3 + 4);
// console.log(result);

let result = (1 + 2) * (3 + 4);
console.log(result);

//user input
// let username = window.prompt("What is your name?");
// console.log(username); //with a windowprompt

let username;
document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = username;
}

let age = window.prompt("How old are you?");
    age=Number(age);
    console.log(typeof age);
    age += 1;
console.log("Happy Burrday!! You are ", age , "years old");

let x;
let y;
let z;

x = Number("2.6");
y = String(3.14);
z = Boolean("");
// z= Boolean("chocolate")
console.log(x , typeof x);
console.log(y , typeof y);
console.log(z , typeof z);