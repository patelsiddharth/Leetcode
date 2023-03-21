/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0, zc = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] === 0)
        {
            zc++;
        }
        else
        {
            count += (zc*(zc+1))/2;
            zc = 0;
        }
    }
    if(zc !== 0)
    {
        count += (zc*(zc+1))/2;
    }
    
    return count;
};