let grade = "A";
if(grade == "A") {
    console.log("You did great!");
}
else if(grade == "B") {
    console.log("You did good!");
}
else if(grade == "C") {
    console.log("You did okay!");
}
else if(grade == "D") {
    console.log("You passed barely!");
}
else if(grade == "F") {
    console.log("You failed!");
}
else {
    console.log(grade, "is not a letter grade");
}



//by using switch
let Grade = "A";
switch(Grade){
    case "A" :
        console.log("You did great!");
        break;
    case "B" :
        console.log("You did good!");
        break;
    case "c" :
        break;
    case "D" :
        console.log("You passed barely!");
        break;
    case "F" :
        console.log("You failed");
        break;
        default:
            console.log(Grade, "is not a letter grade");
}


let GRADE = 94;
switch(true){
    case GRADE >= 90 :
        console.log("You did great!");
        break;
    case GRADE >= 80 :
        console.log("You did good!");
        break;
    case GRADE >= 70 :
        console.log("You did okay!");
        break;
    case GRADE >= 50 :
        console.log("You passed barely!");
        break;
    case GRADE <35 :
        console.log("You failed");
        break;
        default:
            console.log(GRADE, "is not a letter grade");
}