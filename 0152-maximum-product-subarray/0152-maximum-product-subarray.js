/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prefix = 1, suffix = 1, len = nums.length, max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        if (prefix === 0) prefix = 1;
        if (suffix === 0) suffix = 1;

        prefix *= nums[i];
        suffix *= nums[len - 1 - i];
        max = Math.max(max, prefix, suffix);
    }
    return max;
};