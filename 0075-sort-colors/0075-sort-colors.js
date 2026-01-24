/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let right = nums.length - 1;

    while (nums[right] === 2) {
        right--;
    }
    for (let left = 0; left <= right; left++) {
        if (nums[left] === 2) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            while (nums[right] === 2) {
                right--;
            }
        }
    }

    while (nums[right] === 1) {
        right--;
    }
    for (let left = 0; left <= right; left++) {
        if (nums[left] === 1) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            while (nums[right] === 1) {
                right--;
            }
        }
    }
};