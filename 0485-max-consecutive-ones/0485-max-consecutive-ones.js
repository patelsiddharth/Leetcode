/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, count = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 1) {
            count++;
        } else {
            count = 0;
        }
        max = Math.max(max, count);
    }
    return max;
};