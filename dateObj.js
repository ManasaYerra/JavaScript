// date object = used to work with dates and times.

// let date = new Date();
// console.log(date);

// let date = new Date();
// date = date.toLocaleString();
// console.log(date);

// let date = new Date();
// date = date.toLocaleString();
// document.getElementById("mylabel").innerHTML = date;

// let date = new Date(0);
// let date = new Date(1000000000);
// let date = new Date(2023,0,1,2,3,4,5);
// let date = new Date("january 1,2023 00:00:00");
// let date = new Date();
// date = date.toLocaleString();
// document.getElementById("mylabel").innerHTML = date;


// let date = new Date();
// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let ms = date.getMilliseconds();
// date = date.toLocaleString();
// document.getElementById("mylabel").innerHTML=dayOfWeek;

// let date = new Date();
// date.setFullYear(2023);
// date.setMonth(1);
// date.setDate(9);
// date.setHours(16);
// date.setMinutes(50);
// date.setSeconds(34);
// date.setMilliseconds(3);
// date = date.toLocaleString();
// document.getElementById("mylabel").innerHTML = date;

// let date = new Date();
// document.getElementById("mylabel").innerHTML = formatDate(date);
// function formatDate(date){
//     let year = date.getFullYear();
//     // let month = date.getMonth();
//     let month = date.getMonth()+1;
//     let day = date.getDate();
//     return `${month}/${day}/${year}`
// }


let date = new Date();
document.getElementById("mylabel").innerHTML = formatTime(date);
function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrpm = hours >= 12 ? "pm" : "am"
    hours = (hours % 12) || 12; 
    // (converts into standard hours)
    return `${hours}:${minutes}:${seconds} ${amOrpm}`
}
