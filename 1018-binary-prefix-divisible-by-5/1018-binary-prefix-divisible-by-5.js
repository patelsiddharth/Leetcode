/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let prev = 0, res = [];
    nums.forEach(num => {
        prev = (prev % 5) * 2 + num;
        res.push(prev % 5 == 0);
    });
    return res;
};