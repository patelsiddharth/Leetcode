/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    function cs(arr, idx, sum) {
        if(target === sum)
        {
            res.push(arr);
            return;
        }
        
        if(idx === candidates.length || sum > target)
        {
            return;
        }
        
        cs([...arr, candidates[idx]], idx, sum + candidates[idx]);
        
        cs(arr, idx + 1, sum);
    }
    
    cs([], 0, 0)
    return res;
};