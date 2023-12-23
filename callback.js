// callback = a function passed as an argument to
//            another function

// let total = sum(2,3);
// displayConsole(total);
// function sum(x, y){
//     let result = x + y;
//     return result
// }

    // function displayConsole(output){
    //     console.log(output);
// }


// let total = sum(2,3);
// displayDOM(total);
// function sum(x, y){
//     let result = x + y;
//     return result
// }
// function displayDOM(output){
//     document.getElementById("myLabel").innerHTML = output;
// }

sum(2,3,displayDOM);
function sum(x,y,callBack){
    let result = x + y;
    callBack(result);
}
function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
        document.getElementById("myLabel").innerHTML = output;
}
