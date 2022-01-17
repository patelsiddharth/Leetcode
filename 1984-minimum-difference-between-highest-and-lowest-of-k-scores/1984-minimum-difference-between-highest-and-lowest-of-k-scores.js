/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(nums.length < 2)
        return 0;
    
    nums.sort((a,b) => b - a);
    console.log(nums)
    
    let min = nums[0];
    for(let i = 0; i <= nums.length - k; i++)
    {
        console.log("i : ", i)
        console.log("nums["+ i +"] : ", nums[i])
        console.log("nums["+ (i+k-1) +"] : ", nums[i+k-1])
        if(nums[i] - nums[i+k-1] < min)
        {
            min = nums[i] - nums[i+k-1];
            console.log("MIN : ", min)
        }    
    }
    return min;
};