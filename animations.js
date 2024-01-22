// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let x = 0;
//     let y = 0;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(x >= 200){
//             clearInterval(timerId);
//         }
//         else{
//             x += 1;
//             myAnimation.style.left = x + "px";
//         }
//     }
// }




// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let x = 0;
//     let y = 0;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//             y += 1;
//             myAnimation.style.top = y + "px";
//         }
//     }
// }


// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let x = 0;
//     let y = 0;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//             x += 1;
//             y += 1;
//             myAnimation.style.left = x + "px";
//             myAnimation.style.top = y + "px";
//         }
//     }
// }



// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let degrees = 0;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(degrees >= 360){
//             clearInterval(timerId);
//         }
//         else{
//            degrees += 1;
//            myAnimation.style.transform = "rotateX("+degrees+"deg)";
//         }
//     }
// }


// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let degrees = 0;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(degrees >= 360){
//             clearInterval(timerId);
//         }
//         else{
//            degrees += 1;
//            myAnimation.style.transform = "rotateY("+degrees+"deg)";
//         }
//     }
// }


// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let degrees = 0;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(degrees >= 360){
//             clearInterval(timerId);
//         }
//         else{
//            degrees += 1;
//            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//         }
//     }
// }

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let x = 0;
//     let y = 0;
//     let degrees = 0;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//            degrees += 1;
//            x +=1;
//            y += 1;
//            myAnimation.style.left = x + "px";
//            myAnimation.style.top = y + "px";
//            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//         }
//     }
// }

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let x = 0;
//     let y = 0;
//     let degrees = 0;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//            degrees += 2; //increasing the degrees makes the animation faster
//            x +=1;
//            y += 1;
//            myAnimation.style.left = x + "px";
//            myAnimation.style.top = y + "px";
//            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//         }
//     }
// }



// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let scaleX = 1;
//     let scaleY = 1;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(scaleX >= 2){ //increasing the scale value expands the element 
//             clearInterval(timerId);
//         }
//         else{
//            scaleX += 0.01;
//            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//         }
//     }
// }



// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let scaleX = 1;
//     let scaleY = 1;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(scaleY >= 2){ //increasing the scale value expands the element 
//             clearInterval(timerId);
//         }
//         else{
//            scaleY += 0.01;
//            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//         }
//     }
// }


// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timerId = null;
//     let scaleX = 1;
//     let scaleY = 1;
//     timerId = setInterval(frame, 5);
//     function frame(){
//         if(scaleX >= 2 || scaleY >= 2){ //increasing the scale value expands the element 
//             clearInterval(timerId);
//         }
//         else{
//             scaleX += 0.01;
//            scaleY += 0.01;
//            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//         }
//     }
// }


const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");
myButton.addEventListener("click", begin);
function begin(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;
    timerId = setInterval(frame, 5);
    function frame(){
        if(scaleX <= 0.01 || scaleY <= 0.01){ //increasing the scale value expands the element 
            clearInterval(timerId);
        }
        else{
            scaleX -= 0.01;
           scaleY -= 0.01;
           myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}