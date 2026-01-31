/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length, stack = [], res = [];
    // 1,2,3,4,3, 1,2,3,4,3
    // 0 1 2 3 4  5 6 7 8 9
    for(let i = 2*n - 1; i >= 0; i--) {
        while(stack.length !== 0 && stack[stack.length - 1] <= nums[i%n]) {
            stack.pop();
        }
        if (i < n) {
            res[i] = (stack.length === 0) ? -1 : stack[stack.length - 1];
        }

        stack.push(nums[i%n]);
    }

    return res;
};