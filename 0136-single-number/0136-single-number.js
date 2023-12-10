/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor = 0;
   
    nums.forEach(num => {
        xor = xor ^ num
    });
    
    return xor
};