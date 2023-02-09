/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for (i = 0; i < height.length; i++) {
        for (j = i + 1; j < height.length; j++) {
            let min = (height[i] > height[j]) ? min = height[j] : min = height[i];
            let area = min * (j - i);
            if (area > max) {
                max = area;
            }
        }
    }
    return max;
};
