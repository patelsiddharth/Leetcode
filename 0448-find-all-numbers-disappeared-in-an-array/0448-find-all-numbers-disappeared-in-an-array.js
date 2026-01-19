/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const arr = Array(nums.length + 1).fill(-1);
    for(let i = 0; i < nums.length; i++) {
        arr[nums[i]] = 1;
    }
    const res = [];
    for(let i = 1; i <= nums.length; i++) {
        if(arr[i] === -1) {
            res.push(i);
        }
    }
    return res;
};