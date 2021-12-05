/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSum = [], prev = 0;
    
    nums.forEach((curr) => {
        runningSum.push(prev + curr);
        prev += curr;
    })
    
    return runningSum;
};