//method changing
// let userName = "manasa";
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// console.log(letter);

// let userName1 = "virat";
// let letter = userName1.charAt(0).toUpperCase();
// console.log(letter);

let userName2 = "kohli";
let letter = userName2.charAt(0).toUpperCase().trim();
console.log(letter);

//if statement
let age = 62;
if(age >= 18){
    console.log("You are an adult!"); //if age is greater than 18
}
else if(age < 0) {
    console.log("You haven't born yet!") //if age is less than 0
}
else if(age >= 60) {
    console.log("You are a senior citizen!");
}
else {
    console.log("You are a child!"); //if age is less than 0 
}

// let online = true;
// if(online){
//     console.log("You are online");
// }
// else {
//     console.log("You are offline");
// }

let online = false;
if(online){
    console.log("You are online");
}
else {
    console.log("You are offline");
}

document.getElementById("MyButton").onclick = function(){
    const MyCheckBox = document.getElementById("MyCheckBox");
    const B1 = document.getElementById("B1");
    const B2 = document.getElementById("B2");
    const B3 = document.getElementById("B3");
    if(document.getElementById("MyCheckBox").checked){
        console.log("you are subscribed!");
    }
    else {
        console.log("You are not subscribed!");
    }
    if(B1.checked){
        console.log("You are paying with a visa");
    }
    else if(B2.checked){
        console.log("You are paying with a MasterCard");
    }
    else if(B3.checked){
        console.log("Ypu are paying with a simpl")
    }
    else{
        console.log("Select the payment type!");
    }
}