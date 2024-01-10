//  console.time() = starts a timer we can use to track
//                   how long an operation takes 
//          give each timer a unique name.

//start
console.time("Response time");

// alert("CLICK THE OK BUTTON!!");
setTimeout(() => console.log("HELLO!!!!!"),2000);

console.timeEnd("Response time");
//end