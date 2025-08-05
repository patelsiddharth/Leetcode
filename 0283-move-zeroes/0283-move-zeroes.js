/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0, len = nums.length;
    for(let index = 0; index < len; index++) {
        if(nums[index] !== 0) {
            nums[left++] = nums[index];
        }
    }
    while(left < len) {
        nums[left++] = 0;
    }
};