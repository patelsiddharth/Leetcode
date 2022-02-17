/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [], obj = {};
    
    nums.forEach(num => {
        if(obj[num])
        {
            res.unshift(num);
            obj[num]++;
        }
        else
        {
            obj[num] = 1;
        }
    })
    
    for(let num = 1; num <= nums.length; num++)
    {
        if(!nums.includes(num))
        {
            res.push(num);
            break;
        }
    }
    return res;
};