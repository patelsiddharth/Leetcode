/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    
    if(nums.length === 1 || k === 0) return;

    function rev(nums, start, end) {
        let left = start, right = end;
        while(left <= right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }

    rev(nums, 0, nums.length - k - 1)
    rev(nums, nums.length - k, nums.length - 1);
    rev(nums, 0, nums.length - 1);
};