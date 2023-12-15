let count = 0;

document.getElementById("button1").onclick = function() {   
    count -= 1;
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("button2").onclick = function() {  
    count = 0;
    document.getElementById("countlabel").innerHTML = count;  
}
document.getElementById("button3").onclick = function() { 
    count += 1;
    document.getElementById("countlabel").innerHTML = count;   
}