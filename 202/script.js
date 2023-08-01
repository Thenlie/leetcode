/**
 * Return the sum of the digits squared
 * @param {*} n 
 * @returns {number}
 */
const sum = (n) => {
    const str = n.toString().split('');
    let s = 0;
    for (let i = 0; i < str.length; i++) {
      s += parseInt(str[i]) ** 2;
    }
    return s;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const cycle = [n];
    let ans = null;
    let c = 0;
    while (ans === null) {
        c++;
        n = sum(n);
        if (n === 1) ans = true
        else if (cycle.includes(n)) ans = false
        else ans = null;
        cycle.push(n);
    }
    return {ans, c};
}

/**
 * Create an empty array
 * Push n to array
 * Get sum of digits squared -> x
 * If x is 1 return true
 * If x exists in array return false
 * Else push to array and repeat
 */

console.log(isHappy(12341230938432))
