/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, l = 0, r = 0;
    while (r < nums.length) {
        if (nums[l] !== 1) {
            l++;
        } else if (nums[r] === 1) {
            max = Math.max(max, r - l + 1);
        } else {
            l = r;
        }
        r++;
    }
    return max;
};