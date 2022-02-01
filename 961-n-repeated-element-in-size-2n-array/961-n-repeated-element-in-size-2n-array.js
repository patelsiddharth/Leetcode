/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let obj = {}, res;
    nums.every(num => {
        if(!obj[num])
        {
            obj[num] = 1;
            return true;
        }
        else
        {
            res = num;
            return false;
        }
    });
    return res;
};