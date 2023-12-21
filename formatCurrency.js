//toLocaleString() = returns a string with a language 
                    //  sensitive representation of this number
// Number.toLocaleString(locale,{options});
// locale = specify that language (undefined = default set in browser)
// options = object with formatting options


let myNum = 123456789;
// myNum = myNum.toLocaleString("en-US");
// myNum = myNum.toLocaleString("hi-IN");
// myNum = myNum.toLocaleString("de-DE");

// myNum = myNum.toLocaleString("en-US",{style: "currency", currency: "USD"}); 
// myNum = myNum.toLocaleString("hi-IN",{style: "currency", currency: "INR"});
myNum = myNum.toLocaleString("de-DE",{style: "currency", currency: "EUR"});
console.log(myNum);

let num = 0.5;
// num = num.toLocaleString(undefined,{style:"percent"});
num = num.toLocaleString(undefined,{style: "unit", unit: "celsius"});
console.log(num);