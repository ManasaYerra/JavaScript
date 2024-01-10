//  promises = object that encapsulates the result of an 
//          asynchronous operation.
// let asynchronous methods returns values like synchronous methods
// "I promise to return something in the future"

// the state is 'pending' then 'fulfilled' or 'rejected'
//  the result is what can be returned
//  2 parts producing and consuming

// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = true;
//     if(fileLoaded){
//         resolve("File Loaded");
//     }
//     else{
//         reject("File not loaded");
//     }
// })

// promise.then(value => console.log(value));

// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = false;
//     if(fileLoaded){
//         resolve("File Loaded");
//     }
//     else{
//         reject("File not loaded");
//     }
// })

// promise.then(value => console.log(value))
// .catch(error => console.log(error));


// const promise = new Promise(resolve => {
//     setTimeout(resolve,5000);
// })

// promise.then(() => console.log("Thanks for waiting"));


const wait = time => new Promise(resolve => {
        setTimeout(resolve,time);
})
    
wait(3000).then(() => console.log("Thanks for waiting"));