/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}, res = nums[0], majCount = Math.ceil(nums.length/2);
    console.log(majCount)
    nums.every(num => {
        if(obj[num])
        {
            obj[num]++;
            if(obj[num] == majCount)
            {
                res = num;
                return false;
            }
        }
        else
        {
            obj[num] = 1;
        }
        return true;
    })
    return res
};