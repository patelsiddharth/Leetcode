/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let low = 0, high = nums.length - 1, res = [-1,-1];
    while(low <= high)
    {
        let mid = Math.floor((low+high)/2);
        if(nums[mid] === target)
        {
            res[0] = mid;
            high = mid - 1;
        }
        else if(nums[mid] > target)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }
    
    low = 0;
    high = nums.length - 1;
    while(low <= high)
    {
        let mid = Math.floor((low+high)/2);
        if(nums[mid] === target)
        {
            res[1] = mid;
            low = mid + 1;
        }
        else if(nums[mid] > target)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }
        
    return res;
};