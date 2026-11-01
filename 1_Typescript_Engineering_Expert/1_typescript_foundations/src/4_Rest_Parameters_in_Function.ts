// Rest Parameters in Function

const totalSum = (...numbers : number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0)
}

console.log(totalSum(3,5,8,4,6,9))


const logUserAction = (...args : [name: string, age: number, status: boolean]) => {
    const [name, age, status] = args
    console.log(`${name} is ${age} and Status ${status}`)
}

logUserAction("Khadiza", 21, true)


