//* Top types

let x : any = "ami"
x = 8734
// console.log(x)

const something : unknown = "Hello world"
// console.log(something.length)


//* Core Type

let numb : unknown
const num : number = 84754
numb = num
console.log(numb)

type Ststus = "pending" | "success";
let isStatus : string;
let ststus : Ststus = "pending"
isStatus = ststus
console.log(isStatus)


// * Nullish types

interface User {
    name : string
}

// const currentUser : User = null
type loggeInUser = User | null
const currentUser : loggeInUser = null

//* Unit Types

const greet = () => {
    console.log("Hello")
}

const something2 = greet()
// const something2 : string = greet()


//* Sub type of unit type

const another_greet = () : undefined => {
    console.log("Hello")
    return undefined
}

const greetings =  another_greet()
// console.log(greetings)


//* Bottom type

// const neverHapping : never = "jfd"
const getError = (msg : string) => {
    throw new Error(msg)
}

// const A : null = getError("dbfkd")