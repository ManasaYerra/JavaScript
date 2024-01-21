// window.addEventListener("keydown", event => console.log(event.key));


// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;
// function move(event){
//     switch(event.key){
//         case "ArrowDown":
//             y += 5;
//             myDiv.style.top = y + "px";
//             break;
//     }
// }

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;
// function move(event){
//     switch(event.key){
//         case "ArrowUp":
//             y -= 5;
//             myDiv.style.top = y + "px";
//             break;
//     }
// }

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;
// function move(event){
//     switch(event.key){
//         case "ArrowRight":
//             x += 5;
//             myDiv.style.left = x + "px";
//             break;
//     }
// }


const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;
function move(event){
    switch(event.key){
        case "ArrowLeft":
            x -= 5;
            myDiv.style.left = x + "px";
            break;
    }
}