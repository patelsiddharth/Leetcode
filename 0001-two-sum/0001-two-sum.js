/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    nums.forEach((num, index) => {
        obj[num] = index
    })
    
    for(let index = 0; index < nums.length; index++)            
    {
        const otherPart = target - nums[index];
        if(obj.hasOwnProperty(otherPart) && index !== obj[otherPart])
        {
            return [index, obj[otherPart]];
        }
    }
    
    return [];
};