/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let obj = {};
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    });
    
    obj = Object.entries(obj).sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]);
    
    let res = [];
    obj.forEach(ele => {
        for(let i = 0; i < ele[1]; i++)
        {
            res.push(ele[0]);
        }
    })
    return res;
};