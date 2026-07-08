/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxZeroCount = 0, zeroCount = 0;
    for (let idx = 0; idx < nums.length; idx++) {
        if (nums[idx] === 0) {
            zeroCount = 0;
        } else {
            zeroCount++;
        }
        maxZeroCount = Math.max(maxZeroCount, zeroCount);
    }
    return maxZeroCount;
};