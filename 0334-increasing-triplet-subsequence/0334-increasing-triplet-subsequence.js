/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length < 3)
        return false;
    let f = Number.MAX_VALUE, s = Number.MAX_VALUE;
    for(let i = 0; i <= nums.length - 1; i++)
    {
        if(nums[i] < f)
            f = nums[i];
        else if(nums[i] > f && nums[i] < s)
            s = nums[i]
        else if(nums[i] > s)
            return true;
    }
    return false;
};