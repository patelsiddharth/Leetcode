/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const map = new Map();
    const findSum = (i, sum , arr) => {
        if (sum > target) return;

        if (i === candidates.length) {
            if (sum === target) {
                if (!map.has(arr.toString())) {
                    map.set(arr.toString(), arr);
                }
            }
            return;
        }

        findSum(i, sum + candidates[i], [...arr, candidates[i]]);
        findSum(i+1, sum, arr);
        findSum(i+1, sum + candidates[i], [...arr, candidates[i]]);
    }
    findSum(0, 0, []);
    return Array.from(map.values());
};