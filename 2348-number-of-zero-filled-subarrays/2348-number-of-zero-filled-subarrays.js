/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let res = 0, zc = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] === 0)
        {
            zc++;
        }
        else
        {
            res += (zc*(zc+1))/2;
            zc = 0;
        }
    }
    res += (zc*(zc+1))/2;
    return res;
};