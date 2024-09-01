/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0, r = 0, maxLen = 0, zeros = 0
    while(r < nums.length)
    {
        if(nums[r] === 0)
        {
            zeros++;
        }
        
        if(zeros > k)
        {
            if(nums[l] === 0)
            {
                zeros--;
            }
            l++;
        }
        else
        {
            maxLen = Math.max(maxLen, r - l + 1);
        }
        r++;
    }
    return maxLen;
};