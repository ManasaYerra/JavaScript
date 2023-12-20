//function= define code once, and use it many times.
//to perform same code, call the function name.
happyNewYear();
function happyNewYear(){
    console.log("Happy New Year!!");
    console.log("HNY!");
    console.log("Happy New Year Dear!!");
    console.log("Cheers to another year!");
}


happyBirthday();
happyBirthday();
happyBirthday();
function happyBirthday(){
    console.log("Happy Birthday!!");
    console.log("HBD!");
    console.log("Happy Birthday Dear!!");
    console.log("Happy Burrday!");
}


let userName = "ammu";
let age = 21;
happyBirthdayy();
function happyBirthdayy(){
    console.log("Happy Birthday!!");
    console.log("HBD!");
    console.log("Happy Birthday Dear", userName ,"!!");
    console.log("Happy Burrday!");
    console.log("You are ", age ,"years old");
}

startProgram();
function startProgram(){
    let userName = "blah";
    let age = 26;
    happyBirthdayy(userName,age);
}

function happyBirthdayy(userName,age){
    console.log("Happy Birthday!!");
    console.log("HBD!");
    console.log("Happy Birthday Dear", userName ,"!!");
    console.log("Happy Burrday!");
    console.log("You are ", age ,"years old");
}