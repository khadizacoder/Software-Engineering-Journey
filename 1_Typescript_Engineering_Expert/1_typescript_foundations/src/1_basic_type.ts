let myString : string = "Khadiza Khatun";
let myNumber : number = 394795;
let myBoolean : boolean = false;
let mySymbol : symbol = Symbol();
let myBigInt : bigint = 100000n ** 5n;


// const sum = (a : number, b : number) : number => {
//     return a + b
// }

const sum = (a : number, b : number) => {
    return a + b
}

console.log(sum(20,40))
console.log(`Total ${sum(40,60)}`)

console.log(myString)
console.log(myNumber)