//Hypotenuse calc practice program
// let a;
// let b;
// let c;

// a = window.prompt("Enter side A");
// a = Number(a);
// b = window.prompt("Enter the side B");
// b = Number(b);
// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c);

// console.log("side C is : ", c);

document.getElementById("Submitbutton").onclick = function() {
    let a;
    let b;
    let c;

    a = document.getElementById("text1").value;
    a = Number(a);
    b = document.getElementById("text2").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));
    c = document.getElementById("label3").innerHTML = "side c: " + c; 
}