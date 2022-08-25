/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = Math.max(...nums), currMin = 1, currMax = 1;
    
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] === 0)
        {
            currMin = 1;
            currMax = 1;
            continue;
        }
        
        const tempMax = currMax;
        currMax = Math.max(nums[i], currMax * nums[i], currMin * nums[i]);
        currMin = Math.min(nums[i], tempMax * nums[i], currMin * nums[i]);
        maxProduct = Math.max(maxProduct, currMax, currMin);
    }
    
    return maxProduct;
};