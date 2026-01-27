/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let idx = m + n - 1;
    let i = m - 1, j = n - 1;
    while(i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[idx] = nums1[i];
            idx--;
            i--; 
        } else {
            nums1[idx] = nums2[j];
            idx--;
            j--;           
        }
    }
    while(i >= 0) {
        nums1[idx] = nums1[i];
        idx--;
        i--; 
    }
    while (j >= 0) {
        nums1[idx] = nums2[j];
        idx--;
        j--;
    }
};