/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const swap = (i, j) => {
        while(i <= j) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    let len = nums.length;
    k = k % len;
    swap(0, len - 1 - k);
    swap(len - k, len - 1);
    swap(0, len - 1);
};