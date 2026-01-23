/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let arr = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        arr[nums[i]] = 1;
    }
    for (let i = 0; i < n + 1; i++) {
        if (arr[i] === 0) {
            return i;
        }
    }
    return 0;
};