/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {}
    for(let i of nums)
    {
        if(!obj[i])
        {
            obj[i] = 1;
        }
        else
        {
            return i;
        }
    }
    return -1;
};