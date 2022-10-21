/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let left = 0, obj = {};
    
    while(left <= nums.length - 1)
    {
        if(!obj[nums[left]])
        {
            obj[nums[left]] = [left]
        }
        else
        {
            let temp = obj[nums[left]]
            if(left - temp[temp.length - 1] <= k)
                return true;
            else
                obj[nums[left]].push(left)
        }
        left++;
    }
    return false;
};