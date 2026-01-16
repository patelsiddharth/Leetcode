/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    
    const robHouse = (idx, takeZero) => {
        if (takeZero) {
            if (idx === 0) return nums[0];
            if (idx < 0) return 0;
        } else {
            if (idx === 1) return nums[1];
            if (idx < 1) return 0;
        }
        if (dp[idx] !== -1) return dp[idx];
        const pick = nums[idx] + robHouse(idx - 2, takeZero);
        const pickNot = 0 + robHouse(idx - 1, takeZero);
        dp[idx] = Math.max(pick, pickNot);
        return dp[idx];
    }
    
    let dp = Array.from({ length : nums.length + 1}).fill(-1);
    const takeZero = robHouse(nums.length - 2, true);

    dp = Array.from({ length : nums.length + 1}).fill(-1);
    const notTakeZero = robHouse(nums.length - 1, false);

    return Math.max(takeZero, notTakeZero);
};