/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return Array.from(String(BigInt(digits.join('')) + 1n));
}

console.log(plusOne([1,2,3]))

// Input: digits = [1,2,3]
// Output: [1,2,4]

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]    

// Input: digits = [9]
// Output: [1,0]
