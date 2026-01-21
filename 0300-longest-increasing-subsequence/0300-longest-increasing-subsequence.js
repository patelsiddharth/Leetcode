/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const dp = Array(n+1).fill().map(() => Array(n+1).fill(0));
    for(let i = n-1; i >= 0; i--) {
        for(let j = i-1; j >= -1; j--) {
            let take = 0;
            if (j === -1 || nums[i] > nums[j]) {
                take = 1 + dp[i + 1][i + 1];
            }
            const notTake = 0 + dp[i + 1][j + 1];
            dp[i][j+1] = Math.max(take, notTake);
        }
    }
    return dp[0][0];
};