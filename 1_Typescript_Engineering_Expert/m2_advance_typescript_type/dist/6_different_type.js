//* Top types
let x = "ami";
x = 8734;
// console.log(x)
const something = "Hello world";
// console.log(something.length)
//* Core Type
let numb;
const num = 84754;
numb = num;
console.log(numb);
let isStatus;
let ststus = "pending";
isStatus = ststus;
console.log(isStatus);
const currentUser = null;
//* Unit Types
const greet = () => {
    console.log("Hello");
};
const something2 = greet();
// const something2 : string = greet()
//* Sub type of unit type
const another_greet = () => {
    console.log("Hello");
    return undefined;
};
const greetings = another_greet();
// console.log(greetings)
//* Bottom type
// const neverHapping : never = "jfd"
const getError = (msg) => {
    throw new Error(msg);
};
const A = getError("dbfkd");
export {};
