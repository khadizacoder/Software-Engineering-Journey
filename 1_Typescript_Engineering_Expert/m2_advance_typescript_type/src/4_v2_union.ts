//* Literal Type

type Status = "pending"
// const status : Status = "Hello"
const status : Status = "pending"


// * Basic Union

type identity = string | number
const id : identity = "fkgdkgf"
const idd : identity = 89594835 
const iddd : identity = 89594835 + "kjgdjfg"


console.log(id)
console.log(idd)


// Literal Union

type isStatus = "User" | "admin" | "manager"
const user : isStatus = "User"
console.log(user)
const user2 : isStatus = "admin"
console.log(user2)


// Object Union

type Admin = {
    id:number,
    isStatus : "admin",
    privileges : string[],
}

type Member = {
    id: number,
    isStatus : "member",
    plans : []
}

type User = Admin | Member

const userId : User ={
    id: 245,
    isStatus : 'admin',
    privileges : ["a", "b"]
}
console.log(userId)