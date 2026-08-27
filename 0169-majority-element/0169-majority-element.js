/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let elm = nums[0], count = 0;
    nums.forEach(num => {
        if (count === 0) {
            elm = num;
        }
        count = (num === elm) ? count + 1 : count - 1;
    });
    return elm;
};