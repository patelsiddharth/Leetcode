/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let res, obj = {};
    nums.forEach(num => {
        obj[num] = 1
    })
    
    for(let i = 1; i <= nums.length + 1; i++)
    {
        if(!obj[i])
        {
            res = i;
            break;
        }
    }
    
    return res;
};