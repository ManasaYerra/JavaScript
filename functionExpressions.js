// function expression = function without a name 
//                       avoid polluting the global scope with names.
//                        write it,then forget about it.


const greeting = function(){
    console.log("Hello!!");
}
greeting();

// let count = 0;
// function increaseCount(){
//     count++;
//     document.getElementById("myLabel").innerHTML = count;
// }
// function decreaseCount(){
//     count--;
//     document.getElementById("myLabel").innerHTML = count;
// }

let count = 0;
    document.getElementById("increaseButton").onclick = function(){
    count++;
    document.getElementById("myLabel").innerHTML = count;
}
    document.getElementById("increaseButton").onclick = function(){
    count--;
    document.getElementById("myLabel").innerHTML = count;
}