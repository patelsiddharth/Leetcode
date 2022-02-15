/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let res = {},r = [];
    nums.forEach(num => {
        res[num] ? res[num]++ : res[num] = 1;
    })
    Object.entries(res).forEach(i => {
        if(i[1] == 1)
            r.push(i[0])
    })
    return r;
};