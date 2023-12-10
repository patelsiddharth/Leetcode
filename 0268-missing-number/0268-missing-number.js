/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let obj = {};
    nums.forEach(num => obj[num] = 1)
    
    for(let i = 0; i <= nums.length; i++)
    {
        if(!obj.hasOwnProperty(i))
        {
            return i;
        }
    }
    
    return -1;
};