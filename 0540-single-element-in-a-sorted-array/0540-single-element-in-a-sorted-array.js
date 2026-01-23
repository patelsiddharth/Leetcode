/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let res = 0;
    for(let i = 0; i < nums.length - 1; i = i + 2) {
        if (nums[i] !== nums[i+1]) {
            return nums[i];
        }
    }
    return nums[nums.length - 1];
};