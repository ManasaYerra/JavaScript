// error = object with a description of
//              -> something went wrong 
//              -> can't open a file
//              -> lose connection
//              -> user types incorrect input
//              -> type error

// throw = executes a user defined error

// try{
//     console.lag();
// }
// catch(error){
//     console.log(error);
// }

// try{
//     let x = window.prompt("Enter a #");
//     x = Number(x);
//     console.log(`${x} is a num`)
// }
// catch(error){
//     console.log(error);
// }

// try{
//     let x = window.prompt("Enter a #");
//     x = Number(x);
//     if(isNaN(x)) throw "is not a num";
//     if(x == "") throw "that was empty";
//     console.log(`${x} is a num`)
// }
// catch(error){
//     console.log(error);
// }

try{
    let x = window.prompt("Enter a #");
    x = Number(x);
    if(isNaN(x)) throw "is not a num";
    if(x == "") throw "that was empty";
    console.log(`${x} is a num`)
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes");
}