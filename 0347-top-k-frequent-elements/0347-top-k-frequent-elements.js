/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}, res = [];
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    })
    
    Object.entries(obj).sort((a,b) => b[1]-a[1]).forEach((val, index) => {
        if(index < k)
        {
            res.push(val[0])
        }
    });
    
    return res;
};