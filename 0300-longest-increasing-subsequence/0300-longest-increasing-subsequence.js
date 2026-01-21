/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const dp = Array(n).fill().map(() => Array(n+1).fill(-1));
    const lis = (idx, lastIdx) => {
        if (idx === n) return 0;

        if (dp[idx][lastIdx+1] === -1) {
            let take = 0;
            if (lastIdx === -1 || nums[idx] > nums[lastIdx]) {
                take = 1 + lis(idx + 1, idx);
            }
            const notTake = 0 + lis(idx + 1, lastIdx);
            dp[idx][lastIdx+1] = Math.max(take, notTake);
        }

        return dp[idx][lastIdx+1];
    }
    return lis(0, -1);
};