/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;
    while(low <= high)
    {
        let mid = Math.floor((low+high) / 2);
        if(nums[mid] === target)
        {
            return true;
        }
        if(nums[low] === nums[mid] && nums[mid] === nums[high])
        {
            low++;
            high--;
        }
        
        if(nums[low] <= nums[mid])
        {
            if(target >= nums[low] && target < nums[mid])
            {
                high = mid - 1;
            }
            else
            {
                low = low + 1;
            }
        }
        else
        {
            if(target > nums[mid] && target <= nums[high])
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
        }
    }
    return false;
};