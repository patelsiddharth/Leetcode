/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftProduct = [], rightProduct = []
    
    leftProduct[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++)
    {
        leftProduct[i] = leftProduct[i - 1] * nums[i];
    }
    
    rightProduct[nums.length - 1] = nums[nums.length - 1];
    
    for(let i = nums.length - 2; i >= 0; i--)
    {
        rightProduct[i] = rightProduct[i + 1] * nums[i];
    }
    
    let res = [];
    
    res[0] = rightProduct[1];
    res[nums.length - 1] = leftProduct[nums.length - 2];
    for(let i = 1; i < nums.length - 1; i++)
    {
        res[i] = leftProduct[i - 1] * rightProduct[i + 1];
    }
    
    return res;
};