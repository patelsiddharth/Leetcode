/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[0], l = 0, r = nums.length - 1, mid;
    
    while(l <= r)
    {
        if(nums[l] < nums[r])
        {
            min = Math.min(min, nums[l]);
            break;
        }
        
        mid = Math.floor((r + l) / 2);
        
        min = Math.min(min, nums[mid]);
        
        if(nums[mid] >= nums[[l]])
        {
            l = mid + 1;
        }
        else
        {
            r = mid - 1
        }
    }
    
    return min;
};