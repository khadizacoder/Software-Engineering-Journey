// Optional, Default Parameters in function

const concatName = (first? : string, last? : string) : string => {
    if(!last)
        return first ?? " "

    return first + " " + last
}

console.log(concatName("khadiza", "khatun"))


// kono return value na thakle data type void hobe
// defult value last a rakha valo
const greetings = (greeting : string, fullName: string = "Hello") : void => {
    console.log(`${greeting} ${fullName}`)
}

const friends = (ami : string, tumi = "moniruna") => {
    console.log(ami," ", tumi)
}

greetings("lamia", "khadiza Khatun")

friends("josna")



