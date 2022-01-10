/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj = {}, success = false;
    
    nums.forEach((num, index) => {
        obj[num] = obj[num] ? [...obj[num], index] : [index];
    });
    
    Object.values(obj).every(arr => {
        if(arr.length <= 1)
        {
            return true;
        }
        else
        {
            for(let i = 0;i < arr.length - 1; i++)
            {
                if(arr[i+1] - arr[i] <= k)
                {
                    success = true;
                    break;
                }
            }
            return !success;
        }
    })
    
    return success;
};