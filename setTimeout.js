// setTimeout() = invokes a function after a number of milliseconds
//                asynchronous function
//                 (doesn't pause execution) 

// setTimeout(firstMsg,3000);
// setTimeout(secondMsg,5000);
// setTimeout(thirdMsg,8000);
// function firstMsg(){
//     alert(`Buy this course for $500!`);
// }
// function secondMsg(){
//     alert(`This is not a scam`);
// }
// function thirdMsg(){
//     alert(`DO ITTT!`);
// }

let timer1 = setTimeout(firstMsg,3000);
let timer2 = setTimeout(secondMsg,5000);
let timer3 = setTimeout(thirdMsg,8000);
function firstMsg(){
    alert(`Buy this course for $500!`);
}
function secondMsg(){
    alert(`This is not a scam`);
}
 function thirdMsg(){
     alert(`DO ITTT!`);
}
document.getElementById("mybutton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying`);
}