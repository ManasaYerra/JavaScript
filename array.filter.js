// array.filter() = creates a new array with all the elements
//                  that pass the test provided by a 
//                  function.


let ages = [16,18,20,21,22,29];
let adults = ages.filter(checkAge);
adults.forEach(print);
function checkAge(element){
    return element >= 18;
}
function print(element){
    console.log(element);
}