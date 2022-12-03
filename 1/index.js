/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length - i; j++) {
            if (nums[i] + nums[i + j] === target) {
                return [i, i + j]
            }
        }
    }
};

