// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)



// let element = document.body;
// let child = element.firstElementChild;
// console.log(child);
// child.style.backgroundColor = "blue";

// let element = document.body;
// let child = element.lastElementChild;
// console.log(child);
// child.style.backgroundColor = "green";

// let element = document.querySelector("#vegetables");
// let parent = element.parentElement;
// parent.style.backgroundColor = "plum";

// let element = document.querySelector("#vegetables");
// let sibling = element.nextElementSibling;
// sibling.style.backgroundColor = "plum";

// let element = document.querySelector("#vegetables");
// let sibling = element.previousElementSibling;
// sibling.style.backgroundColor = "plum";

// let element = document.querySelector("#fruits");
// let child = element.firstElementChild;
// child.style.backgroundColor = "plum";

// let element = document.querySelector("#fruits");
// let child = element.lastElementChild;
// child.style.backgroundColor = "plum";

// let element = document.querySelector("#fruits");
// let child = element.children[0];
// let child = element.children[1];
// let child = element.children[2];
// child.style.backgroundColor = "plum";

// let element = document.querySelector("#fruits");
// let children = Array.from(element.children);
// children.forEach(child => child.style.backgroundColor = "plum");

// let element = document.querySelector("#vegetables");
// let children = Array.from(element.children);
// children.forEach(child => child.style.backgroundColor = "plum");

let element = document.querySelector("#chocolates");
let children = Array.from(element.children);
children.forEach(child => child.style.backgroundColor = "plum");
