
// Problem 21: Factorial (Recursive) [Easy] Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n. Example: Input: 5 → Output: 120 (5×4×3×2×1)Input: 0 → Output: 1 Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).
const factorial = (n) =>{
    let result = 1

    for(let i = 1; i <= n; i++){
        result = result * i
    }

    return result
}
// console.log(factorial(0))

//*** Problem 22: Fibonacci Sequence [Easy] Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence. Example: Input: 6 → Output: 8 (0,1,1,2,3,5,8...) Hint: Try both iterative and recursive approaches.
const fibonacci = (n) =>{
    if(n === 0){
        return 0
    }

    if(n === 1){
        return 1
    }

    let prev1 = 0
    let prev2 = 1

    for(let i = 2; i <= n; i++){
        let current = prev1 + prev2
        prev1 = prev2
        prev2 = current
    }
    
    return prev2
}
// console.log(fibonacci(6))