// Problem 26: Destructure and Rename [Easy] Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name. Example: const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25 Hint: Use: const { firstName: name, lastName, age } = user;
const user = {
    firstName : 'sara',
    lastName : 'khan',
    age: 25
}

let {firstName, lastName, age} = user

// console.log(user.firstName)

// Problem 27: Merge Arrays with Spread [Easy] Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator. Example: Input: [1,2], [3,4], [5]Output: [1,2,3,4,5] Hint: Use rest parameters and spread inside reduce or flat.
const mergeArrays = (...arrays) =>{
    let result = arrays.flat()
    return result
}
console.log(mergeArrays([1,2], [3,4], [5]))