//  .addEventListener(event,function,useCapture)
//  we can add many event handlers to one element
//  even the same event that invokes different functions.

// const innerDiv = document.getElementById("innerDiv");
// innerDiv.addEventListener("mouseover", changeRed);
// function changeRed(){
//     innerDiv.style.backgroundColor = "purple";
// }


// const innerDiv = document.getElementById("innerDiv");
// innerDiv.addEventListener("mouseout", changeGreen);
// function changeGreen(){
//     innerDiv.style.backgroundColor = "Green";
// }

// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");
// innerDiv.addEventListener("click",changeBlue);
// outerDiv.addEventListener("click",changeOrange);

// function changeBlue(){
//     this.style.backgroundColor = "Blue";
// }
// function changeOrange(){
//     this.style.backgroundColor = "green";
// }


const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");
innerDiv.addEventListener("click",changeBlue);
outerDiv.addEventListener("click",changeOrange);

function changeBlue(){
    alert(`you selected ${this.id}`);
    this.style.backgroundColor = "Blue";
}
function changeOrange(){
    alert(`you selected ${this.id}`);
    this.style.backgroundColor = "green";
}