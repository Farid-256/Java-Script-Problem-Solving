
// Problem 21: Factorial (Recursive) [Easy] Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n. Example: Input: 5 → Output: 120 (5×4×3×2×1)Input: 0 → Output: 1 Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).
const factorial = (n) => {
    let result = 1

    for (let i = 1; i <= n; i++) {
        result = result * i
    }

    return result
}
// console.log(factorial(0))

//*** Problem 22: Fibonacci Sequence [Easy] Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence. Example: Input: 6 → Output: 8 (0,1,1,2,3,5,8...) Hint: Try both iterative and recursive approaches.
const fibonacci = (n) => {
    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return 1
    }

    let prev1 = 0
    let prev2 = 1

    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2
        prev1 = prev2
        prev2 = current
    }

    return prev2
}
// console.log(fibonacci(6))

// Problem 23: Create a Counter with Closure [Medium] Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure. Example: const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2 Hint: Use a variable inside the outer function that inner functions can access.
const makeCounter = () => {
    let count = 0

    return function (action) {
        if (action === 'inc') {
            count = count + 1
        }
        else if (action === 'dec') {
            count = count - 1
        }
        else if (action === 'get') {
            count = count
        }
        return count
    }
}
const counter = makeCounter();
// console.log(counter('get'));

//***Problem 24: Curry a Function [Medium] Description: Write a function curry(fn) that converts a function of two arguments into a curried version. Example: const add = curry((a,b) => a+b);add(2)(3); // 5 Hint: Return a function from inside a function.
const curry = (fn) => {
    return function (a) {
        return function (b) {
            return fn(a, b)
        }
    }
}
const add = curry((a, b) => a + b)
// console.log(add(5) (10))

// ***Problem 25: Memoize a Function [Medium] Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result. Example: const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
const menoize = (fn) => {
    let cache = {}
    return function (n) {
        if (n in cache) {
            return cache[n]
        } else{
            let result = fn(n)
            cache[n] = result
            return result
        }
    }
}
let memoAdd = menoize((n) => n + 10)
// console.log(memoAdd(5))

// Problem 26: Destructure and Rename [Easy] Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name. Example: const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25 Hint: Use: const { firstName: name, lastName, age } = user;

const user = {
    firstName : 'sara',
    lastName : 'khan',
    age: 25
}

let {firstName, lastName, age} = user

// console.log(user.firstName)