/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length, xor1, xor2;
    const arr = new Array(n+1);
    nums.forEach(num => {
        xor2 ^= num
    })
    for(let i = 0; i < n+1; i++) {
        arr[i] = i;
        xor1 ^= i;
    }

    return xor1 ^ xor2;
};