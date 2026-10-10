// Problem 11: Find the Sum of an Array [Easy] Description: Write a function sumArray(arr) that returns the sum of all numbers in an array. Example: Input: [1, 2, 3, 4, 5] → Output: 15 Hint: Use reduce() or a for loop.
const sumArray = (arr) => {
    let count = 0
    for (let number of arr) {
        count = count + number
    }
    return count
}
// console.log(sumArray([1, 2, 3, 4, 5]))

// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.
const findMax = (arr) => {
    let max = arr[0]
    for (let number of arr) {
        if (number > max) {
            max = number
        }
    }
    return max
}
// console.log(findMax([3, 1, 7, 2, 9, 100] ))

// Problem: FizzBuzz [Classic Easy]
// Description:
// একটা function লেখো fizzBuzz(n) — যেটা ১ থেকে n পর্যন্ত সংখ্যাগুলোর একটা array return করবে, কিন্তু:
// ৩ দিয়ে বিভাজ্য হলে → 'Fizz' ৫ দিয়ে বিভাজ্য হলে → 'Buzz' ৩ আর ৫ দুইটা দিয়েই বিভাজ্য হলে → 'FizzBuzz' নাহলে → সংখ্যাটা
const fizzBuzz = (n) => {
    let result = []
    for(let i = 1; i <= n; i++){

        if(i % 3 === 0 && i % 5 === 0){
            result.push('FizzBuzz')
        }
        else if(i % 3 === 0){
            result.push('Fizz')
        }
        else if(i % 5 === 0){
            result.push('Buzz')
        }
        else{
            result.push(i)
        }
    }
    return result
}
console.log(fizzBuzz(15))






























// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().
const removeDuplicates = (arr) => {
    let newArr = []
    for (let number of arr) {
        if (!newArr.includes(number)) {
            newArr.push(number)
        }
    }
    return newArr
}
// console.log(removeDuplicates([1,2,2,3,3,3,4]))

// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().
const flattenArray = (arr) => {
    return arr.flat(1)
}
// console.log(flattenArray([1, [2, 3], [4, 5]]))

// Problem 15: Chunk an Array [Medium] Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size. Example: Input: [1,2,3,4,5], 2 → Output: [[1,2],[3,4],[5]]
const chunkArray = (arr, size) => {
    const result = []

    for (let i = 0; i < arr.length; i = i + size) {
        const chunk = arr.slice(i, i + size)

        result.push(chunk)
    }
    return result
}
// console.log(chunkArray([1, 2, 3, 4, 5], 2))