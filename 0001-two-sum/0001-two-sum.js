/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0; j = 1, res = [];
    while(i < nums.length - 1)
    {
        for(let j = i + 1; j < nums.length; j++)
        {
              if(nums[i] + nums[j] === target)
              {
                  return [i, j];
              }
        }
        i++;
    }
    
    return [];
};