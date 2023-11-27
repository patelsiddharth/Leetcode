/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    });
    const res = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    res.length = k;
    return res.reduce((acc, curr) => {
        acc.push(curr[0])
        return acc;
    }, []);
};