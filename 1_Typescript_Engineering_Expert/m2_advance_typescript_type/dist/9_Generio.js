const wrapInArray = (value) => {
    return [value];
};
// const strArr = wrapInArray("abc");
// const numArr = wrapInArray(123);
const strArr = wrapInArray("Abc");
const numArr = wrapInArray(123);
console.log(strArr);
console.log(numArr);
strArr.map((item) => item.toUpperCase());
// const userRes: UserResponse = {
//     statusCode: 200,
//     success: true,
//     data: {
//         name: "ASDF",
//         role: '23',
//     }
// }
const userRes = {
    statusCode: 200,
    success: true,
    data: {
        name: "ASDF",
        role: '23',
    }
};
export {};
