// const value = require('./file1')
// const {a,b} = require('./file1')
const {a: x, b: y} = require('./file1')

// console.log(value.a)
// console.log(value.b)

// console.log(a,b)
console.log(x + y)


const add = require("./utilis/add.js")
console.log("Additions: " ,add(x,y))