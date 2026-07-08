/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const temp = Array(nums.length + 1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        temp[nums[i]] = 1;
    }
    for(let i = 0; i < temp.length; i++) {
        if (temp[i] === 0) {
            return i;
        }
    }
    return -1;
};