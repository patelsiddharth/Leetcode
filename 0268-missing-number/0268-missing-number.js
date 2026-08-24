/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length, xor1, xor2;
    for(let i = 0; i < n; i++) {
        xor1 ^= nums[i];
        xor2 ^= i;
    }
    xor2 ^= n;
    return xor1 ^ xor2;
};