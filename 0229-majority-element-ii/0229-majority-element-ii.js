/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let obj = {}, set = new Set();
    const target = Math.floor(nums.length / 3);
    
    nums.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
        
        if (obj[num] > target) {
            set.add(num);
        }
    });

    return [...set];
};