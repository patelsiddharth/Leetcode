/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let len = nums.length;
    if(len === 1)
        return nums[0];
    
    let res = 0;
    for(let i = 0; i < len - 1; i++)
    {
        if(nums[i] === nums[i+1])
        {
            i++;
        }
        else
        {
            res = nums[i]
            break;
        }
    }
    
    if(nums[len - 1] !== nums[len - 2])
        return nums[len-1]
    
    return res;
};