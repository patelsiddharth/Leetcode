/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = 1;
    }
    for(let i = 0; i < nums.length + 1; i++) {
        if (!obj[i]) {
            return i;
        }
    }
    return -1;
};