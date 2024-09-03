/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    function subSum(k) {
        if(k < 0) return 0;
        let l = 0, r = 0, sum = 0, count = 0;
        while(r < nums.length)
        {
            sum += nums[r];
            
            while(sum > k)
            {
                sum -= nums[l]
                l++
            }
            
            count = count + (r - l + 1)
            r++;
        }
        return count;
    }
    
    return subSum(goal) - subSum(goal - 1);
};