//* Typeof
let x = ["abc"];
console.log(typeof x === 'object');
let y = null;
console.log(typeof y === 'object');
//* type Guard
// const print = (value : string | number) => {
//     if (typeof value === 'string')
//         return value.toUpperCase();
//     else if (typeof value === 'number')
//         return value;
//     else 
//         return value;
// }
const print = (value) => {
    if (typeof value === 'string')
        return value.toUpperCase();
    else
        return value;
};
const loggedinUser = {
    name: "Khadiza",
    address: {
        street: "Khulna"
    },
};
const ShowAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("User not found");
};
ShowAddress(loggedinUser);
//* some caveat if Type Guard
// const printAll  = (x : string | string[] | null) => {
//     if(x && typeof x === "object")
//     {
//         for (let val of x) {
//             console.log(val)
//         }
//     } 
//     else if(typeof x === 'string')
//         console.log(x);
//     else 
//         console.log("Empty");
// }
const printAll = (x) => {
    if (typeof x === "object" && x !== null) {
        for (let val of x) {
            console.log(val);
        }
    }
    else if (typeof x === 'string')
        console.log(x);
    else
        console.log("Empty");
};
// printAll(["a", "b"])
//* Equality
const cpmpare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const printAlll = (x) => {
    if (x !== null) {
        if (typeof x === 'object') {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log(" ");
};
const move = (animal) => {
    // x = animal.fly()
    if ("fly" in animal) {
        let x = animal.fly();
        return x;
    }
    animal.swim();
};
//* "instanceof" check
// const date = new Date();
// const err = new Error("Something with Wrong!")
// console.log(date instanceof Date);
// console.log(err instanceof Error);
const showData = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
const getArea = (shape) => {
    if (shape.kind == "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
