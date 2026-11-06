// Problem 6: Reverse a String [Easy] Description: Write a function reverseString(str) that returns the reverse of a given string. Example: Input: 'hello' → Output: 'olleh'Input: 'world' → Output: 'dlrow' Hint: Use split(''), reverse(), and join('')
const reverseString = (str) => {
    const word = str.split('')
    const reverse = word.reverse()
    const join = reverse.join('')
    return join
}
// console.log(reverseString('Hello'))

//  Problem 6 (Alternate): Reverse Words in a Sentence [Easy]
// Description:
// একটা function লেখো reverseWords(sentence) — যেটা একটা বাক্যের শব্দগুলোর ক্রম উল্টে দেবে
const reverseWords = (sentence) => {
    const word = sentence.split(' ')
    const reverse = word.reverse()
    const join = reverse.join(' ')
    return join
}
// console.log(reverseWords('I live in Bangladesh'))


// Problem 7: Count Vowels in a String [Easy] Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string. Example: Input: 'hello' → Output: 2 Input: 'javascript' → Output: 3 Hint: Use a loop or match() with a regular expression.
const countVowels = (str) => {
    const newSplit = str.toLowerCase()
    const split = newSplit.split('')
    let count = 0
    const vowel = ('a, e, i, o, u')
    for (let loop of split) {
        if (vowel.includes(loop)) {
            count++
        }
    }
    return count

}
// console.log(countVowels('BAngladesh'))


// Alternate problem 7: Remove Vowels [Easy]
// Description:
// একটা function লেখো removeVowels(str) — যেটা string থেকে সব vowel মুছে ফেলে বাকি string return করবে।
const removeVowels = (str) => {
    let result = []
    let vowel = ('a e i o u')
    for (let loop of str) {
        if (!vowel.includes(loop)) {
            result.push(loop)
        }
    }
    return result.join('')
}
// console.log(removeVowels('Bangladesh'))

// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the
// same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: true Input: 'hello' → Output: false
// Hint: Compare the string to its reverse.
const pllindrome = (str) => {
    let splitStr = str.split('')
    let reverseStr = splitStr.reverse()
    let joinStr = reverseStr.join('')
    if (joinStr === str) {
        return true
    }
    else {
        return false
    }
}
// console.log(pllindrome('racecar'))

//Alternate problem-8: বিবরণ: এমন একটি ফাংশন লিখুন reverseSentence(sentence) — যেটি একটি বাক্যের
// (sentence) প্রতিটি শব্দকে উল্টিয়ে দেবে, কিন্তু বাক্যের শব্দগুলোর ক্রম বা সিরিয়াল ঠিক থাকবে।
// উদাহরণ: ইনপুট: 'I Love Coding' আউটপুট: 'Coding Love I'
const reverseSentence = (sentence) => {
    let sentenceSplit = sentence.split(' ')
    let sentenceReverce = sentenceSplit.reverse()
    return sentenceReverce.join(' ')
}
// console.log(reverseSentence('I Love Coding'))

// Problem 8(Alternate): Count Consonants[Easy]
// Description:
// একটা function লেখো countConsonants(str) — যেটা একটা string এ কতগুলো consonant(vowel ছাড়া বাকি অক্ষর) আছে সেটা return করবে।
const countConsonants = (str) => {
    let newStr = str.toLowerCase()
    let count = 0
    let vowel = ('a e i o u')
    let strSplit = newStr.split('')
    for (let loop of strSplit) {
        if (!vowel.includes(loop)) {
            count++
        }
    }
    return count
}
// console.log(countConsonants('BAngladesh'))

// Problem 9: Capitalize First Letter of Each Word [Easy] Description: Write a function titleCase(str)
// that capitalizes the first letter of every word in a string.
// Example: Input: 'hello world' → Output: 'Hello World' Hint: Use split(' '), map(), and join(' ').
const titleCase = (str) => {
    let strSplit = str.split(' ')
    let result = []
    for (let loop of strSplit) {
        let data = loop[0].toUpperCase() + loop.slice(1)
        result.push(data)
    }
    return result.join(' ')
 }
// console.log(titleCase('hello world'))

// Alternate problem 9: পরিবর্তন ক্যাটাগরির শব্দ (Alternate Capitalize Problem)
// বিবরণ:
// এমন একটি ফাংশন লিখুন camelCaseToNormal(str) — যেটি একটি স্ট্রিংয়ের প্রতিটি শব্দের শুধু প্রথম অক্ষরটি 
// ছোট হাতের (lowercase) করবে এবং বাকী অক্ষরগুলো অপরিবর্তিত রাখবে।
const camelCaseToNormal = (str) =>{
    let strSplit = str.split(' ')
    let result = []
    for(let loop of strSplit){
        let data = loop[0].toLowerCase() + loop.slice(1)
        result.push(data)
    }
    return result.join(' ')
}
// console.log(camelCaseToNormal('I Love You'))

// Problem 10: Count Occurrences of a Character [Easy] Description: Write a function countChar(str, char)
// that returns how many times a character appears in a string.
// Example: Input: 'banana', 'a' → Output: 3 Hint: Use split(char).length - 1 or a loop
const countChar = (str, char) =>{
    let result = []

    let strSplit = str.split('')

    for(let loop of strSplit){

        if(char.includes(loop)){
            result.push(loop)
        }
    }
    return result.length
}
// console.log(countChar('banana', 'a'))






// Count Occurrences of a Character [Easy] Description: Write a function countChar(str, char)
// that returns how many times a character appears in a string.
// Example: Input: 'banana', 'a' → Output: 3 Hint: Use split(char).length - 1 or a loop