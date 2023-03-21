/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let res = 0, zeroCount = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] === 0)
        {
            zeroCount++;
        }
        else
        {
            res += (zeroCount*(zeroCount+1))/2;
            zeroCount = 0;
        }
    }
    res += (zeroCount*(zeroCount+1))/2;
    return res;
};