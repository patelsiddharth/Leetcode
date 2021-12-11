/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length, nonZeroIndex = 0, zeroCount = 0;
    
    if(len === 1 || !nums.includes(0))
        return nums;
    
    
    for(let i = 0; i < len; i++)
    {
        if(nums[i] !== 0)
        {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
        else
        {
            zeroCount++;
        }
    }
    for(let i = 0; i < zeroCount ;i++)
    {
        nums[len-1-i] = 0;
    }
};