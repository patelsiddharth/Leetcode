/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0, idx = 0;
    while(idx < nums.length)
    {
        if(nums[idx] !== 0)
        {
            nums[left] = nums[idx];
            left++;
        }
        idx++;
    }
    
    for(let i = left; i < nums.length; i++)
    {
        nums[i] = 0;
    }
};