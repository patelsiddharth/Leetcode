/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        if (nums[right] === 2) {
            right --;
        } else if (nums[left] === 2) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        } else {
            left++;
        }
    }
    left = 0;
    while(left <= right) {
        if(nums[right] === 1) {
            right--;
        } else if (nums[left] === 1) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        } else {
            left++;
        }
    }
}; 