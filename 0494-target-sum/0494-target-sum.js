/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const map = new Map();
    const countExp = (idx, sum) => {
        if (idx === nums.length) {
            return (sum === target) ? 1 : 0;
        }
        const key = `${idx}-${sum}`;
        if (!map.has(key)) {
            const res = countExp(idx + 1, sum + nums[idx]) + countExp(idx + 1, sum - nums[idx]);
            map.set(key, res);
        }
        return map.get(key);
    } 
    return countExp(0,0);
};