/**
 * @param {number[]} arr
 * @return {number[]}
 */
var rearrangeArray = function(arr) {
    let res = [], p = 0, n = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res[p] = arr[i];
            p = p + 2;
        } else {
            res[n] = arr[i];
            n = n + 2;
        }
    }
    return res;
};