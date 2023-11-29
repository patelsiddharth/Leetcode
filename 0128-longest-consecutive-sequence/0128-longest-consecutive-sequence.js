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
    nums.forEach(num => {
        if(!obj[num - 1])
        {
            let len = 1;
            while(obj[num + len])
            {
                len++;
            }
            maxLen = Math.max(maxLen, len);
        }
    });
    
    return maxLen;
};