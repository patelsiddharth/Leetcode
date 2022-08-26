/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m === 0)
    {
        nums1 = nums2.forEach((i, index) => {
            nums1[index] = nums2[index]
        })
        return;
    }
    if(n === 0)
        return
    
    let i = m-1, j = n-1, len = m + n - 1;
    
    while(i >= 0 || j >= 0)
    {
        if(nums1[i] > nums2[j] || j < 0)
        {
            nums1[len] = nums1[i]
            i--;
        }
        else if(nums1[i] <= nums2[j] || i < 0)
        {
            nums1[len] = nums2[j]
            j--;
        }
        len--;
    }
    
//     while(i >= 0)
//     {
//         nums1[len] = nums1[i]
//         i--;
//         len--
//     }
    
//     while(j >= 0)
//     {
//         nums1[len] = nums2[j]
//         j--;
//         len--
//     }
};