/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    for(let i = 0; i < nums.length; i++)
    {
        let lmax = 1;
        for(let j = i ; j < nums.length; j++)
        {
            lmax = lmax * nums[j]
            max = Math.max(max, lmax)
        }
        
    }
    return max;
};