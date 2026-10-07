// Problem 6: Reverse a String [Easy] Description: Write a function reverseString(str) that returns the reverse of a given string. Example: Input: 'hello' → Output: 'olleh'Input: 'world' → Output: 'dlrow' Hint: Use split(''), reverse(), and join('')
const reverseString = (str) => {
    return str.split('').reverse().join('')
}
// console.log(reverseString('DeepSeek'))

//  Problem 6 (Alternate): Reverse Words in a Sentence [Easy]
// Description:
// একটা function লেখো reverseWords(sentence) — যেটা একটা বাক্যের শব্দগুলোর ক্রম উল্টে দেবে
const reverseWords = (sentence) => {
    return sentence.split(' ').reverse().join(' ')
}
// console.log(reverseWords('I Love You Arpa'))













// Problem 7: Count Vowels in a String [Easy] Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string. Example: Input: 'hello' → Output: 2 Input: 'javascript' → Output: 3 Hint: Use a loop or match() with a regular expression.

const countVowels = (str) => {
    let count = 0
    const lowerCase = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let vowel of lowerCase) {
        if (vowels.includes(vowel)) {
            count++
        }
    }
    return count
}
// console.log(countVowels('Bangladesh'))

// Problem 8(Alternate): Count Consonants[Easy]
// Description:
// একটা function লেখো countConsonants(str) — যেটা একটা string এ কতগুলো consonant(vowel ছাড়া বাকি অক্ষর) আছে সেটা return করবে।
const countConsonants = (str) => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const lowers = str.toLowerCase()

    for (let lower of lowers) {
        if (!vowels.includes(lower)) {
            count++
        }
    }
    return count

}
// console.log(countConsonants('Bangladesh'))

// Alternate problem 7: Remove Vowels [Easy]
// Description:
// একটা function লেখো removeVowels(str) — যেটা string থেকে সব vowel মুছে ফেলে বাকি string return করবে।
const removeVowels = (str) =>{
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let result = ''

    for(let item of str.toLowerCase()){
        if(!vowels.includes(item)){
            result = result + item
        }
    }
    return result
}
console.log(removeVowels('Bangladesh'))


















































// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.
const isPalindrome = (str) => {
    const reverse = str.split('').reverse().join('')
    if (str === reverse) {
        return true
    }
    else {
        return false
    }

}
// console.log(isPalindrome('reverse'))

// Problem 9: Capitalize First Letter of Each Word [Easy] Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string. Example: Input: 'hello world' → Output: 'Hello World' Hint: Use split(' '), map(), and join(' ').
const titleCase = (str) => {
    const words = str.split(' ')
    const capitalizes = words.map(word => {
        return word[0].toUpperCase() + word.slice(1)
    })
    return capitalizes.join(' ')
}
// console.log(titleCase('hello harun'))

// Problem 10: Count Occurrences of a Character [Easy] Description: Write a function countChar(str, char) that returns how many times a character appears in a string. Example: Input: 'banana', 'a' → Output: 3 Hint: Use split(char).length - 1 or a loop.
const countChar = (str, char) => {
    return str.split(char).length - 1
}

const countChar2 = (str, char) => {
    let count = 0
    for (let letter of str) {
        if (letter === char) {
            count++
        }
    }
    return count
}
// console.log(countChar2('occurrences', 'u'))
// console.log(countChar('banana', 'n'))