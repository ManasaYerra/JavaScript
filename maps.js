// maps = objects that holds key-value pairs of any
//         data type.

// const store = new Map([
//     ["t-shirt",20],
//     ["jeans",30],
//     ["socks",10],
//     ["shorts",15]
// ]);
// let shoppingCart = 0;
// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("shorts");
// console.log(shoppingCart);
// store.forEach((value,key) => console.log(`${key} $${value}`));

// const store = new Map([
//     ["t-shirt",20],
//     ["jeans",30],
//     ["socks",10],
//     ["shorts",15]
// ]);
// store.set("Hats",50);
// store.delete("Hats");
// store.forEach((value,key) => console.log(`${key} $${value}`));


// const store = new Map([
//     ["t-shirt",20],
//     ["jeans",30],
//     ["socks",10],
//     ["shorts",15]
// ]);
// // console.log(store.has("Hats"));
// console.log(store.has("shorts"));
// store.forEach((value,key) => console.log(`${key} $${value}`));


const store = new Map([
    ["t-shirt",20],
    ["jeans",30],
    ["socks",10],
    ["shorts",15]
]);
console.log(store.size);
store.forEach((value,key) => console.log(`${key} $${value}`));