/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let c = 0, temp = new Array(nums.length).fill(0);
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            temp[c++] = nums[i];
        }
    }
    for(let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }
};  