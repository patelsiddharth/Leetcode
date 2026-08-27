/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0, count = 0, obj = {};
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
        if (obj[num] > count) {
            res = num;
            count = obj[num];
        }
    });
    return res;
};