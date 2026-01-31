/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [], obj = {}, res = [];
    for(let i = nums2.length - 1; i >= 0; i--) {
        while(stack[stack.length - 1] < nums2[i] && stack.length > 0) {
            stack.pop();
        }
        obj[nums2[i]] = (stack.length === 0) ? -1 : stack[stack.length - 1];
        stack.push(nums2[i]);
    }
    for(let i of nums1) {
        res.push(obj[i]);
    }
    return res;
};