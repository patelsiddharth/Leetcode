/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1];
    let ans = 1;
    for(let i = 1; i <= rowIndex; i++) {
        ans *= rowIndex - i + 1
        ans /= i
        res.push(ans);
    }
    return res;
};