"use strict";
// Optional, Default Parameters in function
const concatName = (first, last) => {
    if (!last)
        return first ?? " ";
    return first + " " + last;
};
console.log(concatName("khadiza", "khatun"));
// kono return value na thakle data type void hobe
// defult value last a rakha valo
const greetings = (greeting, fullName = "Hello") => {
    console.log(`${greeting} ${fullName}`);
};
const friends = (ami, tumi = "moniruna") => {
    console.log(ami, " ", tumi);
};
greetings("lamia", "khadiza Khatun");
friends("josna");
