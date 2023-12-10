/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, lm = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] === 1)
        {
            lm++;
        }
        else
        {
            max = Math.max(max, lm)
            lm = 0
        }
    }
    
    return Math.max(max, lm);
};