/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cnt = 0, el;
    nums.forEach(num => {
        if (cnt === 0) {
            cnt = 1;
            el = num;
        } else if (el === num) {
            cnt++;
        } else {
            cnt--;
        }
    });
    
    let cnt1 = 0;
    nums.forEach(num => {
        if (el === num) {
            cnt1++;
        } 
    });
    return cnt1 > Math.floor(nums.length / 2) ? el : -1;
};