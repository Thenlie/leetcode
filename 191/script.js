/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return (n.toString(2).match(/1/g) || []).length;
}

// 00000000000000000000000000001011 -> 3
// 00000000000000000000000010000000 -> 1
// 11111111111111111111111111111101 -> 30

console.log(hammingWeight(0o1011))
console.log(hammingWeight(0o10000000))

// const n = 0b01011
// console.log((n >>> 0).toString(2));
// console.log(n.toString(2).split(''))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Unsigned_right_shift
// https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
