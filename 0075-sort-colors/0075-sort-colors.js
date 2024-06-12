/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let obj = { 0: 0, 1: 0, 2: 0 };
    nums.forEach(num => {
        obj[num] = obj[num] + 1;
    });
    
    for(let i = 0; i < nums.length; i++)
    {
        if(obj['0'] > 0)
        {
            nums[i] = 0;
            obj['0']--;
        }
        else if(obj['1'] > 0)
        {
            nums[i] = 1;
            obj['1']--;
        }
        else if(obj['2'] > 0)
        {
            nums[i] = 2;
            obj['2']--;
        }
    }
};