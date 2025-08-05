/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set();
    nums.forEach(num => set.add(num));
    let i = 0
    set.forEach((val) => {
        nums[i++] = val;
    });
    return set.size;
};