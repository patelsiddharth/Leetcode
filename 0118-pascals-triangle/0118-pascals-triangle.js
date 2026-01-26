/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    for(let i = 0; i < numRows; i++) {
        let arr = Array(i + 1).fill(1);
        for(let j = 1; j < i; j++) {
            let len = res.length;
            arr[j] = res[len - 1][j-1] + res[len - 1][j];
        }
        res.push(arr);
    }
    return res;
};
