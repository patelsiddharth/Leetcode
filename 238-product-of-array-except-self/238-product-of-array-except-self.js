/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let pre = 1, post = 1, res = [];
    
    for(let i = 0; i < nums.length; i++)
    {
        res[i] = pre;
        pre = nums[i] * pre
    }
    
    for(let i = nums.length - 1; i >= 0; i--)
    {
        res[i] = post * res[i];
        post = nums[i] * post
    }
    
    return res;
};