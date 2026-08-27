/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0, count = 0, obj = {};
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    });
    for(let i in obj) {
        if (obj[i] > count) {
            res = i;
            count = obj[i];
        }
    }
    return +res;
};