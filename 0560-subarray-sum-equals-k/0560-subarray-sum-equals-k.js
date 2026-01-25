/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0, ps = 0, obj = { 0: 1 };
    for (let i = 0; i < nums.length; i++) {
        ps += nums[i];

        if (obj[ps - k]) {
            count += obj[ps - k];
        }

        if (obj[ps]) {
            obj[ps]++;
        } else {
            obj[ps] = 1;
        }
    }
    return count;
};