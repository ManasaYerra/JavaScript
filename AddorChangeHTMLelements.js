// add/change HTML elements
// in two ways : .innerHTML(vulnerable to xss(cross site scripting) attacks)
//               .textContent(more secure)


// const nameTag = document.createElement("h1");
// nameTag.innerHTML = "Bro";
// document.body.append(nameTag);

// const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("Enter your name");
// document.body.append(nameTag);

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag);

const myList = document.querySelector("#icecreams");
const listItem = document.createElement("li");
listItem.textContent = "Cotton candy";
// myList.append(listItem);
// myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);