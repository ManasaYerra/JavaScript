// nested looop = loop inside another loop
for(let i=1; i<=3; i++){
    for(let j=4; j<=7; j++){
        console.log(j);
    }
}

let symbol = window.prompt("Enter a symbol to use")
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");
for(let i=1; i<=rows; i++){
    for(let j=1; j<=columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}