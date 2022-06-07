/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newArray = new Array(nums.length).fill(0)
    
    let start = 0, end = nums.length-1
    for(let i = end; i >= 0; i--){
        if(nums[start] * nums[start] > nums[end] * nums[end])
        {
            newArray[i] = nums[start] * nums[start]
            start++
        }
        else
        {
            newArray[i] = nums[end] * nums[end]
            end--
        }
    }
    return newArray
};