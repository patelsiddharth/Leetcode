/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let obj = {}, res = [];
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    });

    const target = Math.floor(nums.length / 3);
    for(let i in obj) {
        if (obj[i] > target) {
            res.push(parseInt(i)); 
        }
    }
    return res;
};