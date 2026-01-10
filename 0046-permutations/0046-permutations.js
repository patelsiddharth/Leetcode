/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    const findPer = (arr, map) => {
        if(arr.length === nums.length) {
            res.push(arr);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(!map.has(nums[i])) {
                map.set(nums[i], 1);
                findPer([...arr, nums[i]], map);
                map.delete(nums[i]);
            }
        }
    }
    findPer([], new Map());
    return res;
};