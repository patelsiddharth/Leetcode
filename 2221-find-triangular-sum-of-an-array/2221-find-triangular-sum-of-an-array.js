/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while(nums.length !== 1)
    {
        for(let i = 0; i < nums.length - 1; i++)
        {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        nums.length--;
    }
    return nums[0];
};