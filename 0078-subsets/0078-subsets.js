/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    const findSubsets = (i, arr) => {
        if(i >= nums.length) {
            res.push(arr);
            return;
        }
        findSubsets(i+1, arr);
        findSubsets(i+1, [...arr, nums[i]]);
    }
    findSubsets(0, []);
    return res;
};