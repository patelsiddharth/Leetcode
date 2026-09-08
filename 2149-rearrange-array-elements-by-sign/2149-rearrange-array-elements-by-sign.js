/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let odd = 1, even = 0, res = [];
    for(let i = 0; i < nums.length; i++) {
        const isPos = nums[i] >= 0;
        if (isPos) {
            res[even] = nums[i];
            even += 2;
        } else {
            res[odd] = nums[i];
            odd += 2;
        }
    }
    return res;
};