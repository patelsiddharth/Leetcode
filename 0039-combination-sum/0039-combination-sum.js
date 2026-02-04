/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    const path = (i, sum, arr) => {
        if (sum === target) {
            res.push(arr);
            return;
        }
        
        if (i >= candidates.length || sum > target) {
            return;
        }

        path(i, sum + candidates[i], [...arr, candidates[i]]);
        path(i + 1, sum, arr);
    }
    path(0, 0, []);
    return res;
};