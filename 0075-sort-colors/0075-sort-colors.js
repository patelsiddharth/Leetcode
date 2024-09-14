/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l = 0, r = 0;
    while(r < nums.length)
    {
        if(nums[r] === 0)
        {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++;
    }
    
    r = l;
    while(r < nums.length)
    {
        if(nums[r] === 1)
        {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++
    }
        
};