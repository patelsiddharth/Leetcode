/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    nums.sort((a,b) => a - b), max = 0;
    for(let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i] - nums[i-1]);
    }
    return max;
};