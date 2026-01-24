/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0, right = nums.length - 1;

    while (nums[right] === 2) {
        right--;
    }
    while (left <= right) {
        if (nums[left] === 2) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            while (nums[right] === 2) {
                right--;
            }
        }
        left++;
    }

    left = 0;
    while (nums[right] === 1) {
        right--;
    }
    while (left <= right) {
        if (nums[left] === 1) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            while (nums[right] === 1) {
                right--;
            }
        }
        left++;
    }
};