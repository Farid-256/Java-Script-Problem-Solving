// Problem 6: Reverse a String [Easy] Description: Write a function reverseString(str) that returns the reverse of a given string. Example: Input: 'hello' → Output: 'olleh'Input: 'world' → Output: 'dlrow' Hint: Use split(''), reverse(), and join('')
const reverseString = (str) =>{
    return str.split('').reverse().join('')
}
// console.log(reverseString('Hellow'))

 
// Problem 7: Count Vowels in a String [Easy] Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string. Example: Input: 'hello' → Output: 2Input: 'javascript' → Output: 3 Hint: Use a loop or match() with a regular expression.
const countVowels = (str) =>{
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    const lowerCase = str.toLowerCase()

    for(let letter of lowerCase){
        if(vowels.includes(letter)){
            count++
        }
    }
    return count
}
// console.log(countVowels('JavaScript'))

// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.