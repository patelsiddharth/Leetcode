/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const swap = (i, j) => {
        while(i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }
    const len = nums.length - 1;
    k = k % (len + 1);
    swap(0, len - k);
    swap(len - k + 1, len);
    swap(0, len);
};