/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let tempArr = [], len = nums.length;
    
    if(len === 1 || k === 0) return;

    k = k % len;
    
    for(let i = 0; i < k; i++) {
        tempArr[i] = nums[len - k + i];
    }
    for(let i = len - 1; i >=0; i--) {
        if (i - k >= 0) {
            nums[i] = nums[i - k];
        } else {
            nums[i] = tempArr[i];
        }
    }
};