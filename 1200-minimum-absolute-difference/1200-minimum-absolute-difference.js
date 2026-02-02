/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let min = Number.POSITIVE_INFINITY, res = [];
    
    arr.sort((a, b) => a - b);

    for(let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i] - arr[i-1]);
    }
    
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i-1] === min) {
            res.push([arr[i-1], arr[i]]);
        }
    }

    return res;
};