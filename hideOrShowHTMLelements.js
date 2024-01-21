const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");
myButton.addEventListener("click", () => {
    if(myImg.style.display == "none"){
        myImg.style.display = "block";
    }
    else{
        myImg.style.display = "none"; 
    }
})

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");
// myButton.addEventListener("click", () => {
//     if(myImg.style.display == "hidden"){
//         myImg.style.display = "visible";
//     }
//     else{
//         myImg.style.display = "hidden"; 
//     }
// })