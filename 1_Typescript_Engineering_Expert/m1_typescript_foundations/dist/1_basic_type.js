"use strict";
let myString = "Khadiza Khatun";
let myNumber = 394795;
let myBoolean = false;
let mySymbol = Symbol();
let myBigInt = 100000n ** 5n;
// const sum = (a : number, b : number) : number => {
//     return a + b
// }
const sum = (a, b) => {
    return a + b;
};
console.log(sum(20, 40));
console.log(`Total ${sum(40, 60)}`);
console.log(myString);
console.log(myNumber);
