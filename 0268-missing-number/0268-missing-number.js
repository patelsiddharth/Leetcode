/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0; n = nums.length;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    const sumN = (n * (n + 1))/2
    return sumN - sum;
};