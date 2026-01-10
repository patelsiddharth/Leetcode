/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a,b) => a-b);
    const findSubset = (idx, arr) => {
        res.push(arr);
        for(let i = idx; i < nums.length; i++) {
            if (i !== idx && nums[i-1] === nums[i]) continue;
            findSubset(i+1, [...arr, nums[i]]);
        }
    }
    findSubset(0, []);
    return res;
};