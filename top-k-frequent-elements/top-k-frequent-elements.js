/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}, res = [];
    
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    });
    
    obj = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    
    let count = 0;
    obj.every(ele => {
        if(count < k)
        {
            res.push(ele[0]);
            count++;
            return true;
        }
        return false;
    });
    return res;
};