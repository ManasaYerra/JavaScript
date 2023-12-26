// let grades = [40,30,50,67,90,23];
// grades = grades.sort(descendingSort);
// grades.forEach(print);
// function descendingSort(x,y){
//     return y - x;
// }
// function print(element){
//     console.log(element);
// }

let grades = [40,30,50,67,90,23];
grades = grades.sort(ascendingSort);
grades.forEach(print);
function ascendingSort(x,y){
    return x - y;
}
function print(element){
    console.log(element);
}