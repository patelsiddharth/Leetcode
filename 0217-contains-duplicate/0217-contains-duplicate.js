/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let temp = new Array(nums.length + 1);
    for(let i = 0; i < nums.length; i++)
    {
        if(temp[nums[i]] === -1)
        {
            return true;
        }
        temp[nums[i]] = -1;
    }
    return false;
};