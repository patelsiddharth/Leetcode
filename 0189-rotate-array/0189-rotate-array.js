/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    k = k % len;
    const reverse = (i, j) => {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    reverse(0, len - 1 - k);
    reverse(len - k, len - 1);
    reverse(0, len - 1);
};