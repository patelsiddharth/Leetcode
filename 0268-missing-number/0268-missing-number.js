/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const arr = new Array(n+1);
    nums.forEach(num => {
        arr[num] = 1;
    })
    for(let i = 0; i < n+1; i++) {
        if (arr[i] === undefined) {
            return i;
        }
    }
    return 0;
};