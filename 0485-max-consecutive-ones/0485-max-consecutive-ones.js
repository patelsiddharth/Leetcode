/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let right = 0, max = 0, count = 0;
    while(right < nums.length) {
        if (nums[right] === 1) {
            count++;
        } else {
            count = 0;
        }
        max = Math.max(max, count)
        right++;
    }
    return max;
};