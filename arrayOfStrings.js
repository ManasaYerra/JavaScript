// let icecreams = ["Chocochip","Black current","Belgium chocolate","Cotton candy"];
// for(let icecream of icecreams){
//     console.log(icecream);
// }

let icecreams = ["Chocochip","Black current","Belgium chocolate","Cotton candy"];
// icecreams = icecreams.sort(); //arranges in an alphabetical order
icecreams = icecreams.sort().reverse();//arranges in reverse order
for(let icecream of icecreams){
    console.log(icecream);
}