/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set1 = new Set(nums)
    return nums.length !== set1.size
};