
// Problem 21: Factorial (Recursive) [Easy] Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n. Example: Input: 5 → Output: 120 (5×4×3×2×1)Input: 0 → Output: 1 Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).
const factorial = (n) =>{
    let result = 1

    for(let i = 1; i <= n; i++){
        result = result * i
    }

    return result
}
console.log(factorial(0))