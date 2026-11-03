// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10. Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.
const swap = (a, b) =>{
    return [a, b] = [b, a]
}
// console.log(swap(10, 5))


// Alternet problem 1: Swap Without Destructuring [Easy]
// Description:
// দুইটা variable a এবং b এর মান এমনভাবে swap করো যাতে কোনো third variable ব্যবহার না হয়, আর array destructuringও না হয়। শুধু arithmetic 
// operators (+, -) ব্যবহার করবে।
const swap2 = (a, b) =>{
    a = a + b //10 + 5 = 15
    b = a - b //15 - 5 = 10
    a = a - b
    return {a, b}
    }
// console.log(swap2(10, 5))


// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: true. Input: 7  → Output: false
// Hint: Use the modulus (%) operator.


// Alternate Problem 2: Check Even or Odd [Easy]
// Description:
// এমন একটা function লেখো যেটা একটা সংখ্যা নেবে এবং বলবে সেটা জোড় (even) নাকি বিজোড় (odd)।



// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.



// Alternate problem: Find the Second Largest [Easy-Medium]
// Description:
// এমন একটা function লেখো secondLargest(a, b, c) — যেটা তিনটা সংখ্যার মধ্যে দ্বিতীয় বৃহত্তম (second largest) সংখ্যাটা return করবে।
//Right way



// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32 Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32


// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.


// Alternate problem 5: Description:
// একটা function লেখো checkTemperature(temp) — যেটা তাপমাত্রা (temperature) নিয়ে একটা category return করবে।
