/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}, res = [];
    nums.forEach((num, index) => {
        obj[num] = index
    })
    
    nums.forEach((num, index) => {
        const otherPart = target - num;
        if(obj.hasOwnProperty(otherPart) && index !== obj[otherPart])
        {
            res = [index, obj[otherPart]];
        }
    })
    
    return res;
};