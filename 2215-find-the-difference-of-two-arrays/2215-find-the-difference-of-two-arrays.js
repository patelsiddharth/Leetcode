/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let obj = {}, res = [[], []];
    nums1.forEach(num => obj[num] = obj[num] ? obj[num] + 1 : 1);
    nums2.forEach(num => {
        if(!obj[num])
        {
            !res[1].includes(num) && res[1].push(num);
        }
        else
        {
            obj[num] = -1;
        }
    })
    for(let i in obj) {
        if(obj[i] !== -1)
        {
            res[0].push(i)
        }
    }
    
    return res;
};