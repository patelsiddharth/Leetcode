/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}, res = -1;
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1
    });
    Object.entries(obj).forEach(([key, val]) => {
        if (val === 1) {
            res = key;
            return;
        }
    });
    return +res;
};