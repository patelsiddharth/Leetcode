/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let left = 0, right = nums.length - 1, obj = {};
    
    while(left <= right)
    {
        if(Array.isArray(obj[nums[left]]) && obj[nums[left]].length > 0)
        {
           obj[nums[left]].push(left) 
        }
        else
        {
            obj[nums[left]] = [left]
        }
        left++;
    }
    
    let arr1 = Object.values(obj)
    for(let i = 0; i < arr1.length; i++)
    {
        let arr = arr1[i];
        if(arr.length > 1)
        {
            let left = 0, success = false;
            while(left < arr.length - 1)
            {
                if(arr[left + 1] - arr[left] <= k)
                {
                    success = true;
                    break;
                }
                left++;
            }
            
            if(success)
            {
                return true;
            }
        }
    }
    
    return false;
};