/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max = -1, min = nums[0];
    nums.forEach(num => {
        if(num < min)
            min = num
        
        if(num-min > max)
            max = num-min;
    })
    
    return max ? max : -1;
};