/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = {};
    nums.forEach((num, index) => {
        res[num] = res[num] ? res[num] + 1 : 1;
    });
    return parseInt(Object.entries(res).find(a => a[1] == 1));
};