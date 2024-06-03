# Javascript challenges

### **Challenge #1**

Write a short program that does the following:

- Declares a constant, `num`, with a value of their choice.
- If the value is greater than or equal to 11, outputs `High`
- If the value is less than 3, outputs `Low`
- If the value is between 11 and 3, outputs `Medium`
- If the value is exactly 7, outputs `Exact`

 ~5 minutes to complete the challenge.

### **Challenge #2**

Write a short program that does the following:

- Loops from 1 to 30 (inclusive)
- If the number is below 10, display a `.`
- If the number is between 10 and 20, display an `x`
- If the number is above 20, display an `X`

 ~5 minutes to complete the challenge.

### **Challenge #3**

Write a function named `farewell` that does the following:

- Accepts a single argument, `name`
- Returns the string `"Goodbye forever, "` + `name`

Examples:

- `farewell("Nancy")` -> "Goodbye forever, Nancy"
- `farewell("Bertrand")` -> "Goodbye forever, Bertrand"

~5 minutes to complete the challenge.

### **Challenge #4**

Write a function that does the following:

- Accepts three arguments: `start`, `stop`, and `final`
- Counts down from the `start` number to the `stop` number, outputting each number as it does so
- Instead of the `stop` number, outputs the value of `final`
- **OPTIONAL** extend the function so that it can handle the possibility of `stop` being greater than `start`

Example output for `countDown(10, 5, "Blastoff!")`  as an aid:

```
10
9
8
7
6
Blastoff!

```

~5 minutes to complete the challenge.

### **Challenge #5**

Write a function (`countTarget()`) that does the following:

- Accepts two arguments: an array of values (`arr`) and a target value (`target`)
- Counts the number of times `target` appears in `arr`
- Returns an object with two keys:
    - `success`, storing a boolean value based on whether the `target` was found at all within `arr`
    - `count`, storing the number of times `target` appears in `arr`

Examples:

- `countTarget([1, 1, 1], 1)` -> `{ success: true, count: 3 }`
- `countTarget([1, 1, 1], 3)` -> `{ success: false, count: 0 }`
- `countTarget([1, 1, "1"], 1)` -> `{ success: true, count: 2 }`

~5 minutes to complete the challenge.