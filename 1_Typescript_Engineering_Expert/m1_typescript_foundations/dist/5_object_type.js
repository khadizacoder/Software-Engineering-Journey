"use strict";
// Object, Type Alias and Interface
const users = {
    name: "Khadiza",
    age: 22,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ["abc", "kad"],
    address: {
        streetName: "khulna",
        holdingNumber: 13234
    }
};
const user2 = {
    name: "Habiba",
    age: 18,
    isActive: false,
    action: () => console.log("ami jabo"),
    badges: ["ka", "ak"]
};
console.log(users);
user2.name = "Hridoy";
console.log(user2);
