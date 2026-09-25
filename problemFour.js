// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.
const countProperties = (obj) =>{
    const length = Object.keys(obj).length
    return length
}
// console.log(countProperties({a: 1, b: 2, c: 3}))

// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().
const mergeObjects = (obj1, obj2) =>{
    const result = {
        ...obj1,
        ...obj2
    }
    return result
}
// console.log(mergeObjects({a:1, b:2}, {b:3}))