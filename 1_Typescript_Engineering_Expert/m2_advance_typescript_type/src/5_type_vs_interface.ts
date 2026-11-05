// * Type alias vs interface

// TODO : Type alias

type ID = number
type Role = "admin" | "member"

// ! interface deay ("admin" | "member") korte parbo na

interface User {
    name : string;
    id : ID;
    // role : Role;
    role : "admin" | "member"
}

const user : User = {
    name : "Khadiza",
    id : 233,
    role : "admin"
}
console.log(user)


// TODO: interface

interface Animal {
    species : string;
}

interface Cat extends Animal{
    breed : String;
}

const cat : Cat = {
    breed : "Persian",
    species: "Flix"
}
// console.log(cat)


type Vehecal = {
    brand : string
}

type Car = Vehecal & {
    model : string
}

const car : Car = {
    model : "Toyota",
    brand : "Corolla"
}
// console.log(car)

// * interface redeclare korle 2 ta marg hoay jabe
//* same name er 2 ta interface create kora jabe but same name er 2 ta type create kora jabe na
interface IEmploye {
    id : number
}
interface IEmploye {
    name : string
}

const employe : IEmploye = {
    id : 4,
    name : "Khadiza"
}
// console.log(employe)

