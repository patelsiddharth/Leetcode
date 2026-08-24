/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const sum = nums.reduce((acc, curr) => acc + curr);
    const nSum = (n * (n+1)) / 2;
    return nSum - sum;
};