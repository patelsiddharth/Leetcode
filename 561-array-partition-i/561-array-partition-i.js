/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let res = 0;
    nums.sort((a,b) => a - b);
    console.log(nums)
    for(let i = 0; i < nums.length ; i = i + 2)
    {
        res += nums[i];
    }
    return res;
};