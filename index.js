//Spread operators

//Duplicate an array

let numbersArr = [1, 2, 3]

let newNumbersArr = [...numbersArr]

newNumbersArr.push(4)

console.log("Original Array:", numbersArr)
console.log(newNumbersArr)

const duplicateArray = arr => [...arr]

console.log(duplicateArray(["apple", "grape"]))

//adding new element to an array

const addNewElement = (arr, element) => [...arr, element]
console.log(addNewElement(["Kiwi", "Orange"], "Avocardo"))

//combining two arrays

const combineArray = (arr1, arr2) => [...arr1, ...arr2]
console.log(combineArray([11, 12, 13], [14, 15, 16]))

//copying an array of objects

const copyObject = (obj) => ({...obj})
console.log(copyObject({name: "Alice", age: 20}))

//adding a property to object

const addPropToObject = (obj, key, value) => ({...obj, [key]: value})
console.log(addPropToObject({name: "Alice", age: 20}, "favColor", "blue"))