// Array, Tuple and readonly modifier

const arr = ["khadiza", 21, false]

const arr2 : string[] = ["Khadiza", "HABIBA", "Hridoy"] 
console.log(arr2)

 
const arr3 : Array<string> = ["Khadiza", "Hridoy"]
const arr4 : number[] = [10,20,30,40]

const dhakaLatLong : [number, number] = [23.7104, 90.4074]
// kono change na korte chayle
const dhakaLetLong : readonly [number, number]= [23.7104, 90.4074] // readonly use korle r khokon o change kora jabe na
console.log(dhakaLatLong)



