// ## Warm-up challenges
//Problem - Reverse a String**
function reverseString(str){
    return str.split(‘’).reverse().join(‘’);
}
// console.log(reverseString(“hello”)); // Output: “olleh”
//Problem - Find the Largest Number in an Array**
function findLargest(arr){
    return Math.max(...arr);
}
// console.log(findLargest([1, 6, 3, 4, 5])); // Output: 5
//Problem - Count the Vowels**
function countVowels(str){
    const vowels = “aeiouAEIOU”
    let count = 0
    for (let i=0; i < str.length; i++){
        if (vowels.includes(str[i])){
            count++
        }
    }
    return count
}
// console.log(countVowels(“goodbye”))
//### Beginner Level
//**1) Problem - Fizzbuzz**
function fizzBuzz(num){
    for (let n = 1; n <= num; n++){
        if (n%3 === 0 && n%5 === 0){
        console.log(“FizzBuzz”)
        }
        else if (n%3 === 0){
            console.log(“Fizz”)
        }
        else if (n%5 === 0){
            console.log(“Buzz”)
        }
        else {
            console.log(n)
        }
    }
    return “Done”
}
// console.log(fizzBuzz(30))
//Problem: Find Second Largest Number in an Array**
function getSecond(arr){
    if (arr.length < 2){
        return null
    }
    const sorted = arr.sort((a,b)=>a-b)
    const large = Math.max(...sorted)
    const index = arr.indexOf(large)
    return sorted[index-1]
}
// console.log(getSecond([2,5,1000,9,8,10]))
//### Intermediate Level
//**1) Problem - Find the Factorial of a Number**
function factorial(num){
    if (num === 0 || num === 1){
        return 1
    }
    for (let i = num - 1; i >= 1; i--){
        num *= i
    }
    return num
}
console.log(factorial(5))