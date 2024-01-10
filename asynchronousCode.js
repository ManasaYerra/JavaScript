// asynchronous code = out of sequence
// ex : -> access a database
//      -> fetch a file
//      -> tasks that take time
//    (start now, finish sometime later)

console.log("START");
setTimeout(() => console.log("This is asynchronous"),5000);
console.log("END");