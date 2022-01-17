/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(nums.length < 2)
        return 0;
    
    nums.sort((a,b) => b - a);
    
    let min = nums[0];
    for(let i = 0; i <= nums.length - k; i++)
    {
        if(nums[i] - nums[i+k-1] < min)
        {
            min = nums[i] - nums[i+k-1];
        }    
    }
    return min;
};