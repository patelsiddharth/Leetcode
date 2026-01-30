/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let len = nums2.length, res = [], obj = {}; // last = -1;
    // obj[nums2[len - 1]] = -1;
    for(let i = 0; i < len; i++) {
        obj[nums2[i]] = -1;
        for(let j = i+1; j < len; j++) {
            if(nums2[j] > nums2[i]) {
                obj[nums2[i]] = nums2[j];
                break;
            }
        }
    }
    // for(let i = nums2.length - 2; i >= 0; i--) {
    //     obj[nums2[i]] = nums2[i + 1] > nums2[i] ? nums2[i+1] : last;
    //     last = obj[nums2[i]];
    // }
    // console.log(obj)
    for(let item of nums1) {
        res.push(obj[item]);
    }
    return res;
};

// 1,3,2,4
// 3,4,4,-1