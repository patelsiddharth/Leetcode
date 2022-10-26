/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let obj = {}, currSum = 0, rem = -1;
    for(let i = 0; i < nums.length; i++)
    {
        currSum += nums[i];
        rem = currSum % k;
        if(rem === 0 && i !== 0)
        {
            return true;
        }
        else if(!obj.hasOwnProperty(rem))
        {
            obj[rem] = i;
        }
        else if(i - obj[rem] > 1)
        {
            return true;
        }
    }
    
    return false;
};