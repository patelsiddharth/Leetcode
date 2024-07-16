/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {}, count = Math.floor(nums.length / 2);
    nums.forEach(num => obj[num] = obj[num] ? obj[num] + 1 : 1);
    
    for(let i in obj) {
        if(obj[i] > count) {
            return i;
        }
    }
    
    return -1;
};