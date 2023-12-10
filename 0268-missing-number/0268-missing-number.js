/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr = new Array(nums.length + 1).fill(0);
    nums.forEach(num => arr[num] = 1);
    return arr.findIndex(i => i === 0);
};