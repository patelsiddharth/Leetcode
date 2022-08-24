/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let obj = {}, res = 0;
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1
    })
    
    nums.forEach(num => {
        if(obj[num-1])
            return
        else
        {
            let temp = num, tempRes=1;
            while(obj[temp + 1])
            {
                tempRes++;
                temp++;
            }
            if(res < tempRes)
                res = tempRes 
        }
    })
    
    return res;
};