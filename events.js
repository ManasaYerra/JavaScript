// Events = some action that the user or browser does
//  Many html elements contains event attributes


// const element = document.getElementById("myButton");
// element.onclick = doSomething;
// function doSomething(){
//     alert("You did something")
// }


// const element = document.body;
// element.onload = doSomething;
// function doSomething(){
//     alert("You did something")
// }

// const element = document.getElementById("myText");
// element.onchange = doSomething;
// function doSomething(){
//     alert("You did something")
// }


// const element = document.getElementById("mydiv");
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;

// function doSomething(){
//     element.style.backgroundColor = "orange";
// }

// function doSomethingElse(){
//     element.style.backgroundColor = "grey";
// }


const element = document.getElementById("mydiv");
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
    element.style.backgroundColor = "orange";
}

function doSomethingElse(){
    element.style.backgroundColor = "grey";
}
