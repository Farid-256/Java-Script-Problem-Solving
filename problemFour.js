// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3



// Hint: Use Object.keys().length.
const countProperties = (obj) => {
    const length = Object.keys(obj).length
    return length
}
// console.log(countProperties({a: 1, b: 2, c: 3}))

// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().
const mergeObjects = (obj1, obj2) => {
    const result = {
        ...obj1,
        ...obj2
    }
    return result
}
// console.log(mergeObjects({a:1, b:2}, {b:3}))

// Problem 18: FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.
const fizzBuzz = (n) => {
    let result = [];

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }

        else if (i % 3 === 0) {
            result.push("Fizz");
        }

        else if (i % 5 === 0) {
            result.push("Buzz");
        }

        else {
            result.push(i);
        }
    }

    return result.join(",");
};

console.log(fizzBuzz(15));
