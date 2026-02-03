/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let max = 0, obj = {};

    for(let i = 0; i < nums.length; i++) {
        obj[nums[i]] = nums[i]
    }
    
    let arr = Object.values(obj);
    for(let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i] - arr[i-1]);
    }
    
    return max;
};