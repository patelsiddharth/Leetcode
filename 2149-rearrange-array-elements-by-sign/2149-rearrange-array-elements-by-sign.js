/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let ni = 1, pi = 0, res = [];
    
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] > 0)
        {
            res[pi] = nums[i];
            pi = pi + 2;
        }
        else
        {
            res[ni] = nums[i];
            ni = ni + 2;
        }
    }
    return res;
};