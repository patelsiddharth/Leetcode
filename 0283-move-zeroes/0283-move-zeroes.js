/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0, index = 0, count = 0;
    while(index < nums.length) {
        if(nums[index] !== 0) {
            nums[left] = nums[index];
            left++;
        } else {
            count++;
        }
        index++;
    }
    let l = nums.length - 1;
    while(count > 0) {
        nums[l--] = 0;
        count--;
    }
};