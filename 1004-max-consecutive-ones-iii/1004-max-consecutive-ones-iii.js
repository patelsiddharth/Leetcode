/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, max = 0, len = 0, zc = 0;
    for(let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zc++;
        }

        if(zc > k) {
            if (nums[left] === 0) {
                zc--;
            }
            left++;
        }
        
        if (zc <= k) {
            len = right - left + 1;
            max = Math.max(max, len);
        }
    }
    return max;
};