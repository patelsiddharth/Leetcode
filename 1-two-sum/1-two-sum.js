/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj ={}
    for(let i = 0; i < nums.length; i++)
    {
        let diff = target - nums[i];
        
        if(obj.hasOwnProperty(diff))
            return [i, obj[diff]]
        
        obj[nums[i]] = i;
    }
    
    return []
};