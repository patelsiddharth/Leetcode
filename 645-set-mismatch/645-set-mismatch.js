/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [], count;
    
    for(let num = 1; num <= nums.length; num++)
    {
        count = nums.filter(x => x === num).length;
        if(count === 2)
        {
            res[0] = num;
        }
        else if(count === 0)
        {
            res[1] = num;
        }
    }
    return res;
};