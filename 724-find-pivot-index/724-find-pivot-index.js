/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    nums.map(num => sum += num);
    let i = 0, leftSum = 0, rightSum = sum;
    while(i < nums.length)
    {
        rightSum = rightSum - nums[i];
        leftSum = sum - nums[i] - rightSum;
        if(rightSum == leftSum)
        {
            return i;
        }
        else
        {
            i++;
        }
    }
    return -1;
};