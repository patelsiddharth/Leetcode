/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1)
    {
        return nums[0];
    }
    
    let l = 0, r = nums.length - 1, min = 5001;
    while(l <= r)
    {
        let mid = Math.floor((l + r) / 2);
        
        if(nums[l] <= nums[mid])
        {
            min = Math.min(min, nums[l]);
            l = mid + 1;
        }
        else if(nums[mid] <= nums[r])
        {
            min = Math.min(min, nums[mid]);
            r = mid - 1;
        }
    }
    return min;
};