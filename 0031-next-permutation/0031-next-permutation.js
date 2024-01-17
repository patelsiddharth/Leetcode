/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let index = -1;
    for(let i = nums.length - 2; i >= 0; i--)
    {
        if(nums[i] < nums[i+1])
        {
            index = i;
            break;
        }
    }
    if(index === -1)
    {
        nums.reverse();
        return;
    }
    
    for(let i = nums.length - 1; i >= index; i--)
    {
        if(nums[i] > nums[index])
        {
            let tempNum = nums[i];
            nums[i] = nums[index];
            nums[index] = tempNum;
            break;
        }
    }
    let i = index + 1, j = nums.length - 1;
    while(i <= j)
    {
        let tempNum = nums[i];
        nums[i] = nums[j];
        nums[j] = tempNum;
        i++;
        j--;
    }
};