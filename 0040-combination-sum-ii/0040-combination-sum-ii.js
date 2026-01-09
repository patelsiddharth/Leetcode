/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [];
    candidates.sort((a,b) => a-b);
    const findSum = (idx, sum, arr) => {
        if (sum === 0) {
            res.push(arr);
            return;
        }
        for(let i = idx; i < candidates.length; i++) {
            if(i > idx && candidates[i - 1] === candidates[i]) continue;
            if(candidates[i] > sum) break;
            findSum(i + 1, sum - candidates[i], [...arr, candidates[i]]);
        }
    }
    findSum(0, target, []);
    return res;
};