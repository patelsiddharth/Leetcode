/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for(let i = 0; i < k; i++)
    {
        sum += nums[i];
    }
    
    let max = sum;
    for(let i = 1; i <= nums.length - k; i++)
    {
        sum = sum - nums[i-1] + nums[i + k - 1];
        max = Math.max(max, sum);
    }

    return max/k;
};