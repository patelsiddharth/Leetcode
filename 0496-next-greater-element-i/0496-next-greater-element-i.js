/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [], obj = {}, res = [];
    for(let i = nums2.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
            obj[nums2[i]] = -1;
        } else {
            let len = stack.length;
            while(stack[len - 1] < nums2[i] && len > 0) {
                len--;
            }
            stack.length = len;
            obj[nums2[i]] = (len === 0) ? -1 : stack[len-1];
        }
        stack.push(nums2[i]);
    }
    for(let i of nums1) {
        res.push(obj[i]);
    }
    return res;
};