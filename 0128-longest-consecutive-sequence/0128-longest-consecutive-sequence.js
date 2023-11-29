/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let obj = {};
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    });
    
    let maxLen = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(!obj[nums[i] - 1])
        {
            let n = 1, len = 1;
            while(obj[nums[i] + n])
            {
                len++;
                n++;
            }
            maxLen = Math.max(maxLen, len);
        }
    }
    
    return maxLen;
};