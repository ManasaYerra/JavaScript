// nested functions = functions inside other functions.

// let userName = "Manasa";
// let userInbox = 0;
// login();
// function login(){
//     displayUserName();
//     displayUserInbox();
// }
// function displayUserName(){
//     console.log(`Welcome ${userName}`);
// }
// function displayUserInbox(){
//     console.log(`You have ${userInbox} new messages`);
// }

let userName = "Manasa";
let userInbox = 0;
    displayUserName();
    displayUserInbox();
function login(){
    displayUserName();
    displayUserInbox();
}
function displayUserName(){
    console.log(`Welcome ${userName}`);
}
function displayUserInbox(){
    console.log(`You have ${userInbox} new messages`);
}