/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b) => a-b);
    return gcd(nums[0], nums[nums.length-1]);
};

function gcd(a, b) {
    if (b == 0)
      return a;
   return gcd(b, a % b);
}