/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length, res = [];
    res[n-1] = -1;
    for(let i = n-2; i>= 0; i--) {
        res[i] = Math.max(res[i + 1], arr[i + 1]);
    }
    return res;
};