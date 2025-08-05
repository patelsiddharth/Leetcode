/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0, index = 0;
    while(index < nums.length) {
        if(nums[index] !== 0) {
            nums[left] = nums[index];
            left++;
        }
        index++;
    }
    while(left < nums.length) {
        nums[left++] = 0;
    }
};