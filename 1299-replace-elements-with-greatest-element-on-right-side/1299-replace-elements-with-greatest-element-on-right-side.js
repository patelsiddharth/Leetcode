/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let len = arr.length;
    let max = arr[len - 1];
    let res = [-1];
    for(let i = len - 2; i >= 0; i--) {
        res.push(max);
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let i = 0; j = len - 1;
    while(i <= j) {
        [res[i], res[j]] = [res[j], res[i]];
        i++;
        j--;
    }
    return res;
};