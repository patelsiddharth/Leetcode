/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}, arr = new Array(nums.length), res = [];
    
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    });
    
    Object.entries(obj).forEach(entry => {
        if(arr[entry[1]])
            arr[entry[1]].push(entry[0]);
        else
            arr[entry[1]] = [entry[0]];
    });
    
    for(let i = arr.length - 1; i >= 0; i--)
    {
        if(res.length < k)
            arr[i] && res.push(...arr[i]);
        else
            break;
    }
    
    return res;
};