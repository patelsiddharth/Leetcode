/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let obj = {}, count = Math.floor(nums.length / 3), res = [];
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
        if(obj[num] === count + 1)
        {
            res.push(num);
        }
    });
    return res;
};