// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10. Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.
const swaps = (a, b) => {
    [a, b] = [b, a]
    return { a, b }
}
// console.log(swaps(5, 10))

// Alternet problem 1: Swap Without Destructuring [Easy]
// Description:
// দুইটা variable a এবং b এর মান এমনভাবে swap করো যাতে কোনো third variable ব্যবহার না হয়, আর array destructuringও না হয়। শুধু arithmetic operators (+, -) ব্যবহার করবে।
const swaps2 = (a, b) => {
    a = a + b //15
    b = a - b
    a = a - b
    return { a, b }
}
// console.log(swaps2(10, 5))

// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: true. Input: 7  → Output: false
// Hint: Use the modulus (%) operator.
const isEven = (n) => {
    if (n % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}
// console.log(isEven(10))

// Alternate Problem 2: Check Even or Odd [Easy]
// Description:
// এমন একটা function লেখো যেটা একটা সংখ্যা নেবে এবং বলবে সেটা জোড় (even) নাকি বিজোড় (odd)।
const isEven2 = (n) => {
    if (n % 2 === 0) {
        return (true)
    } else {
        return (false)
    }
}
// console.log(isEven2(10))


// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

const largest = (a, b, c) => {
    if (a >= b && a >= c) {
        return a
    }
    else if (a <= b && b >= c) {
        return b
    }
    else {
        return c
    }
}
// console.log(largest(3, 7, 5))

// Alternate problem: Find the Second Largest [Easy-Medium]
// Description:
// এমন একটা function লেখো secondLargest(a, b, c) — যেটা তিনটা সংখ্যার মধ্যে দ্বিতীয় বৃহত্তম (second largest) সংখ্যাটা return করবে।
//Right way
const secondLargest = (a, b, c) =>{
    const arr = [a, b, c]
    const result = arr.sort((x, y) => x - y)
    return result[1]

}
// console.log(secondLargest(30, 20, 10))


// const secondLargest = (a, b, c) => {
//     let arr1 = [a, b, c]
//     const arr2 = []
//     if (a >= b && a >= c) {
//         arr2.push(a)
//     }
//     else if (b >= a && b >= c) {
//         arr2.push(b)
//     }
//     else {
//         arr2.push(c)
//     }
//     if (a <= b && a <= c) {
//         arr2.push(a)
//     }
//     else if (b <= a && b <= c) {
//         arr2.push(b)
//     }
//     else {
//         arr2.push(c)
//     }
//     const combind = [...arr1, ...arr2]
//     const uncommon = combind.filter(item => {
//         return !arr1.includes(item) || !arr2.includes(item)
//     })
//     return uncommon
// }
// console.log(secondLargest(30, 10, 10))



// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32 Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32
const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32
}
// console.log(toFahrenheit(100))

// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.
const checkSign = (n) =>{
    if(n === 0){
        return 'Zero'
    }
    else if(n > 0){
        return 'Positive'
    }
    else{
        return 'Negative'
    }
}
// console.log(checkSign(5))

// Alternate problem 5: Description:
// একটা function লেখো checkTemperature(temp) — যেটা তাপমাত্রা (temperature) নিয়ে একটা category return করবে।
const checkTemperature = (temp) =>{
    if(temp < 0){
        return 'freezing'
    }
    else if(temp <= 10){
        return 'cold'
    }
    else if(temp <=25){
        return 'normal'
    }
    else if(temp <= 35){
        return 'hot'
    }
    else if(temp > 35){
        return 'very hot'
    }
}
console.log(checkTemperature(20))