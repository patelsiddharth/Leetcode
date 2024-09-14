/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    })
    
    let res = [], arr = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    for(let i = 0; i < k; i++)
    {
        res.push(arr[i][0]);
    }
    return res;
};