/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let res = -1, l = 0, r = nums.length - 1;
    while(l <= r)
    {
        let mid = Math.floor((l+r) / 2);
        
        if(nums[mid] === target)
        {
            res = mid;
            break;
        }
        
        if(nums[mid] >= nums[l])
        {
            if(target < nums[l] || target > nums[mid])
                l = mid + 1
            else
                r = mid - 1;
        }
        else
        {
            if(target > nums[r] || target < nums[mid])
            {
                r = mid - 1
            }
            else
            {
                l = mid + 1
            }
        }
    }
    return res;
};

// 4 5 6 7 0 1 2 3