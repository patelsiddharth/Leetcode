/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0], currentSum = 0;
    
    nums.forEach(num => {
        currentSum += num;
        
        if(currentSum > maxSum)
            maxSum = currentSum;
        
        if(currentSum < 0)
            currentSum = 0;
    })
    return maxSum
};