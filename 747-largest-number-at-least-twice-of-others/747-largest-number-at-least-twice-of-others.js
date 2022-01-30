/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = nums[0], res = 0;
    nums.forEach((num, index) => {
        if(num > max)
        {
            max = num;
            res = index;
        }
    });
    
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i]*2 > max && nums[i] != max)
        {
            return -1;
        }
    }
    return res;
};