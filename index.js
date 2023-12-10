// console.log('Dear Zindagi');  //first js code 

// let name = 'Ammu';
// console.log(name); //To declare and initialize a variable

// let Interest=0.4;
// Interest=2;
// console.log(Interest)

// const Interest=0.5;
// console.log(Interest); //Constant

//primitives

// let name='Manasa'; //string
// let age=21; //number
// let isApproved=true; //boolean
// let firstNmae=undefined; //undefined
// let selectedColor=null; //null

//objects
// let person = {
//     name: 'Manasa',
//     age: 21
// };

// console.log(person);

//to change the name ,to access the name property there are 2 ways
//1.dot notation

// let person = {
//     name: 'Manasa',
//     age: 21
// };
// person.name='Gopal';
// console.log(person.name);

//2.Bracket notation

// let person={
//     name:'Manasa',
//     age:21
// };
// person['name']='Gopal';
// // console.log(person['name']); 
// console.log(person.name);

//Arrays

// let colors=['black','red'];
// console.log(colors);

//each element has an index,it determines the position of element
// index of 1st ele is 0 2nd is 1
// let colors=['black','red']; 
// console.log(colors[0]); //to access 1st elmnt

// let colors=['black','red']; 
// colors[2]='peach';
// console.log(colors);

// let colors=['black','red']; 
// colors[2]=6;
// console.log(colors);

// properties of an array using dot notation
// let colors=['black','red']; 
// colors[2]=6;
// console.log(colors.length);

//functions

// function greet(){
//     console.log('Hey Siri');
// }
// greet();

//performing a task
// function greet(name){ //name is parameter of greet
//     console.log('Hey'+' '+ name);
// }
// greet('Ammu'); //ammu is argument of greet
// greet('Manasa');

// function greet(name,lastName){
//     console.log('Hey'+' '+ name+' '+lastName);
// }
// greet('Ammu');
// greet('Manasa');

// function greet(name,lastName){
//     console.log('Hey'+' '+ name+' '+lastName);
// }
// greet('Manasa','Yerra');

//calculating a value
// function square(number) {
//     return number*number;
// }
// console.log(square(2));

function square(number) {
    return number*number;
}
let number=square(2);
console.log(number);