/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    for(let idx = 0; idx < nums.length; idx++)
    {
        if(nums[idx] !== 0)
        {
            nums[left] = nums[idx];
            if(left !== idx)
                nums[idx] = 0;
            left++;
        }
    }
};