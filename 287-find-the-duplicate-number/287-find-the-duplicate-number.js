/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++)
    {
        let index = Math.abs(nums[i]) - 1
        if(nums[index] < 0)
        {
            return Math.abs(nums[i])
        }
        else
        {
            nums[index] = -nums[index]
        }
    }
};