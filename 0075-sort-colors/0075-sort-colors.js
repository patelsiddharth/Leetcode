/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let res = [], c0 = 0, c1 = 0, c2 = 0;
    
    nums.forEach(num => {
        if(num === 0)
            c0++;
        else if(num === 1)
            c1++;
        else
            c2++;
    })
    
    for(let i = 0; i < nums.length; i++)
    {
        if(c0 !== 0)
        {
            nums[i] = 0;
            c0--;
        }
        else if(c1 !== 0)
        {
            nums[i] = 1;
            c1--;
        }
        else
        {
            nums[i] = 2;
            c2--;
        }
    }
};