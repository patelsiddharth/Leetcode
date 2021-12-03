/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0, result = [];
    nums.forEach(x => result[x] = result[x] ? result[x] + 1 : 1);
    result.forEach(x => {
        if(x > 1)
        {   
            count += x*(x-1)/2;
        }
    });
    return count;
};