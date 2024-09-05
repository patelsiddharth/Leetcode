/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1, min = 5001;
    while(low <= high)
    {
        let mid = Math.floor((low+high)/2);
        if(nums[low] <= nums[high])
        {
            min = Math.min(min, nums[low]);
            break
        }
        if(nums[low] <= nums[mid])
        {
            min = Math.min(min, nums[low])
            low = mid + 1;
        }
        else if (nums[high] >= nums[mid])
        {
            min = Math.min(min, nums[mid]);
            high = mid - 1;
        }
    }
    return min;
};