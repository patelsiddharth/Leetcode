/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0, i = 0;
    while(i < nums.length)
    {   
        if(nums[i] !== 0)
        {
            nums[j] = nums[i];
            j++;
        }
        i++;
    }
    for(k = j; k < nums.length; k++)
    {
        nums[k] = 0
    }
};