/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set()
    nums.forEach(num => {
        set.add(num);
    })
    let res = [...set]
    res.forEach((val, idx) => {
        nums[idx] = val
    });
    return res.length
};