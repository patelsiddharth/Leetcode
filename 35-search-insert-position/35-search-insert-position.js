/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let mid = 0, start = 0, end = nums.length - 1, res = nums.length;
    
    while(start <= end)
    {
        mid = start + parseInt((end-start)/2);
        
        if(nums[mid] >= target)
        {
            res=mid;
            end = mid-1
        }
        else
        {
            start = mid+1;
        }
    }
    
    return res;
};