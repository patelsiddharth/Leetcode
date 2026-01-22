/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b) => a-b);
    const n = nums.length;
    const dp = Array(n).fill().map(() => Array(n+1).fill(-1));
    const lds = (idx, prevIdx) => {
        if (idx === nums.length) return [];

        if (dp[idx][prevIdx + 1] === -1) {
            let pick = [];
            if (prevIdx === -1 || nums[idx] % nums[prevIdx] === 0) {
                pick = [nums[idx], ...lds(idx + 1, idx)];
            }
            const notPick = lds(idx + 1, prevIdx);

            dp[idx][prevIdx + 1] = pick.length > notPick.length ? pick : notPick;
        }

        return dp[idx][prevIdx + 1];
    }
    return lds(0, -1);
};