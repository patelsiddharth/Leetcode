/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let len = nums.length, zeroCount = 0, oneCount = 0, twoCount = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) { zeroCount++; }
        else if (nums[i] === 1) { oneCount++; }
        else { twoCount++; }
    }

    for (let i = 0; i < len; i++) {
        if (zeroCount > 0) {
            nums[i] = 0;
            zeroCount--;
        } else if (oneCount > 0) {
            nums[i] = 1;
            oneCount--;
        } else {
            nums[i] = 2;
            twoCount--;
        } 
    }
};