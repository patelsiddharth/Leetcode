/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);
    
    let i = 0, j = 0, res = [];

    const append = (item) => {
        const len = res.length;
        if (len === 0 || res[len - 1] !== item) {
            res.push(item);
        }
    }

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) i++;
        else if (nums1[i] > nums2[j]) j++;
        else {
            append(nums1[i]);
            i++;
            j++;
        }
    }
    return res;
};