/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows == 1) return [[1]];
    if (numRows == 2) return [[1], [1,1]];

    const ans = [[1], [1,1]];
    for (let i = 3; i < numRows+1; i++) {
        const tmp = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i-1) {
                tmp.push(1);
            } else {
                tmp.push(ans[i-2][j-1] + ans[i-2][j]);
            }
        }
        ans.push(tmp);
    }
    return ans;
}

