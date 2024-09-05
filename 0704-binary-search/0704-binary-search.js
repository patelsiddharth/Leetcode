/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function binarySearch(i, j) {
        if(i > j)
        {
            return -1;
        }
        
        let mid = Math.floor((i + j) / 2);
        if(nums[mid] === target)
        {
            return mid;
        }
        else if(nums[mid] > target)
        {
            return binarySearch(i, mid - 1);
        }
        else
        {
            return binarySearch(mid + 1, j);
        }
    }
       
    return binarySearch(0, nums.length - 1);
};