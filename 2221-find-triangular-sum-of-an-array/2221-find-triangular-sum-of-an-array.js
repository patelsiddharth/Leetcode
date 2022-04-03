/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while(nums.length !== 1)
    {
        nums = sum(nums);
    }
    return nums[0];
};

function sum(nums) {
    let newArr = [];
    for(let i = 0; i < nums.length - 1; i++)
    {
        newArr.push((nums[i] + nums[i + 1]) % 10)
    }
    return newArr;
}