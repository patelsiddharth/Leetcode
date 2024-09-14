/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res = [], obj = {}, arr = new Array(nums.length + 1);
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    })
    
    for(let i in obj)
    {
        arr[obj[i]] = arr[obj[i]] ? [...arr[obj[i]], i] : [i];
    }
    
    for(let i = arr.length - 1; i > 0; i--)
    {
        if(k === 0)
        {
            break;
        }
        if(arr[i])
        {
            res.push(...arr[i])
            k -= arr[i].length;
        }
    }
    return res;
};