//  async = makes a function return a promise.

async function loadFile(){

    let fileLoaded = false;

    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }
}

loadFile().then(value => console.log(value))
.catch(error => console.log(error));
