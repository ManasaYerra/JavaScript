let adult = checkAge(21);
console.log(adult);
function checkAge(age){
    return age >= 18 ? true : false;
}

checkWinner(false);
function checkWinner(win){
    win ? console.log("YOU WIN") : console.log("YOU LOSE");
}