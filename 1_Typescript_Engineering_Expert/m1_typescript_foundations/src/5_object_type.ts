// Object, Type Alias and Interface

// const User : {
//     name: String;
//     age: number;
//     isActive: boolean;
//     action: () => void;
//     badges: string[];
// } = {
//     name: "Khadiza",
//     age: 22,
//     isActive: true,
//     action: () => console.log("Hello"),
//     badges: ["abc", "kad"]
// }

// Common type bar bar use na korte chayle

type userName = string

// nested object
type Address = {
    streetName : string;
    holdingNumber : number;
}

type TUser = {
    name: userName;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];

    // address : {
    //     streetName : string;
    //     holdingNumber : number;
    // }
    address : Address;
}


interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
}



const users : TUser = {
    name: "Khadiza",
    age: 22,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ["abc", "kad"],
    address: {
        streetName: "khulna",
        holdingNumber: 13234
    }
}

const user2 : IUser = {
    name: "Habiba",
    age: 18,
    isActive: false,
    action: () => console.log("ami jabo"),
    badges: ["ka","ak"]
}

console.log(users)

user2.name = "Hridoy"
console.log(user2)


