/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let obj = {}, count = Math.floor(nums.length / 3), res = [];
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    })
    for(let i in obj)
    {
        if(obj[i] > count)
        {
            res.push(i);
        }
    }
    return res;
};