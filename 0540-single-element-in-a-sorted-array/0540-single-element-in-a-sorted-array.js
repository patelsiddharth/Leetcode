/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    const obj = {};
    for(let num of nums) {
        obj[num] = obj[num] ? obj[num] + 1 : 1
    }
    for (let i in obj) {
        if(obj[i] === 1) {
            return parseInt(i);
        }
    }
    return 0;
};