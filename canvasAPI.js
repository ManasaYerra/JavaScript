// canvas API = a means for drawing graphics
//              used for animations,games,data visualization

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(500, 500);
// context.stroke();


// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();



// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// //DRAW LINES
// context.strokeStyle = "orange";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();


// to draw triangle

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500,250);
// context.lineTo(250, 0);
// context.stroke();


// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.strokeStyle = "pink";
// context.fillStyle = "purple";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500,250);
// context.lineTo(250, 0);
// context.stroke();
// context.fill();


// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// context.fillStyle ="yellow";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250);

// context.fillStyle = "red";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250);

// context.fillStyle = "green";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 250);

// context.fillStyle = "blue";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 0, 250, 250);

//circle

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.fillStyle = "orange";
// context.lineWidth = 10;
// context.strokeStyle = "dark";
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.font = "50px MV ";
// context.fillStyle = "grey";
// context.fillText("YOU WIN", 100, 100);

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.font = "50px MV ";
// context.fillStyle = "grey";
// context.fillText("YOU WIN", canvas.width / 2, canvas.height / 2);

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.font = "50px MV ";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN", canvas.width / 2, canvas.height / 2);