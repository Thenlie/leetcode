/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    if (nums.length === 1) return [0];
    
    const ans = [];
    const leftSum = [];
    const rightSum = [];

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += nums[j];
        }
        leftSum.push(sum);
        sum = 0;
        for (let k = nums.length - 1; k > i; k--) {
            sum += nums[k];
        }
        rightSum.push(sum);
    }

    for (let i = 0; i < nums.length; i++) {
        ans.push(Math.abs(leftSum[i] - rightSum[i]));
    }
    return ans;
}

console.log(leftRightDifference([10,4,8,3])); // Expect [15,1,11,22]
console.log(leftRightDifference([1]));        // Expect [0]
 