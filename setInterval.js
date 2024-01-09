// setInterval() = invokes a function repeatedly after a 
//             number of milliseconds

let count = 0;
let max = window.prompt("Count upto what #?");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp(){
    count += 1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}
