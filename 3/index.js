/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count = 0;
    let j = 0;
    let chars = [];
    if (s.length <= 1){
        return s.length
    }
    for (let i = 0; i < s.length; i++) {
        if (!chars.includes(s.charAt(i))) {
            chars.push(s.charAt(i))
        } else {
            if (count < chars.length) { count = chars.length }
            chars = [];
            i = j;
            j++
        }
    }
    if (count > chars.length) {
        return count
    } else {
        return chars.length        
    }
};

