/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = {}
    nums.forEach(num => {
        res[num] = res[num] ? res[num] + 1 : 1;
    })
    return Object.keys(res).find(i => res[i] == 1)
};