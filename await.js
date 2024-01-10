//  await = makes an async function wait for a promise

// async function loadFile(){
//     let fileLoaded = true;
//     if(fileLoaded){
//         return "file loaded";
//     }
//     else{
//         throw "file not loaded";
//     }
// }

// loadFile().then(value => console.log(value))
// .catch(error => console.log(error));

// async function loadFile(){
//     let fileLoaded = true;
//     if(fileLoaded){
//         return "file loaded";
//     }
//     else{
//         throw "file not loaded";
//     }
// }
// async function startProcess(){
//     let message = await loadFile();
//     console.log(message);
// }
// startProcess();


async function loadFile(){
    let fileLoaded = false;
    if(fileLoaded){
        return "file loaded";
    }
    else{
        throw "file not loaded";
    }
}
async function startProcess(){
    try{
       let message = await loadFile();
    console.log(message);  
    }
    catch(error){
        console.log(error);
    } 
}
startProcess();

