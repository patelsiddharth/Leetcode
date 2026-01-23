/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zp = -1, i = 0, zeroCount = 0, n = nums.length;
    while(i < n) {
        if (zp === -1 && nums[i] === 0) {
            zp = i;
        }
        if(zp !== -1 && nums[i] !== 0) {
            nums[zp] = nums[i];
            nums[i] = 0;
            zp++;
        }
        i++;
    }
    return nums;
};