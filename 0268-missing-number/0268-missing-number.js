/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;
    let sum = len * (len + 1) / 2;
    let numsSum = nums.reduce((acc, curr) => acc + curr)
    
    return sum - numsSum;
};