/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let obj = {}, max = 0;
    
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    });
    
    for(let i = 0; i < nums.length; i++)
    {
        if(!obj[nums[i] - 1])
        {
            let lm = 1;
            while(obj[nums[i] + lm])
            {
                lm++;
            }
            max = Math.max(max, lm);    
        }
    }
    
    return max;
};