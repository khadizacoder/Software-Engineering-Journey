const wrapInArray = <T> (value : T) => {
    return [value];
}

// const strArr = wrapInArray("abc");
// const numArr = wrapInArray(123);
const strArr = wrapInArray<string>("Abc")
const numArr = wrapInArray<number>(123);
console.log(strArr)
console.log(numArr)

strArr.map((item) => item.toUpperCase());


// interface UserRes {
//     data: {
//         name: string,
//         role:string,
//     };
//     success: boolean;
//     statusCode : number;
// }

// interface BlogRes {
//     data: {
//         title: string;
//         description:string;
//         date: string;
//     };
//     success: boolean;
//     statusCode : number;
// }

interface User {
    name: string,
    role:string,
}

interface Blog {
    title: string;
    description:string;
    date: string;

}

interface ApiRes <T>{
    data: T;
    success: boolean;
    statusCode : number;
}

type UserResponse = ApiRes<User>;
type BlogResponse = ApiRes<Blog>;

// const userRes: UserResponse = {
//     statusCode: 200,
//     success: true,
//     data: {
//         name: "ASDF",
//         role: '23',
//     }
// }

const userRes: ApiRes<User> = {
    statusCode: 200,
    success: true,
    data: {
        name: "ASDF",
        role: '23',
    }
}