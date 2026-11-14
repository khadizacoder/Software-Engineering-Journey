import a from "./file1.mjs"

import {b as value} from "./file3.mjs"
import {a as val} from "./file3.mjs"

import sum from "./utilits/sum.mjs"

// console.log(a)
console.log(value)
console.log(val)

console.log("Total sum -> ",sum(value, a))