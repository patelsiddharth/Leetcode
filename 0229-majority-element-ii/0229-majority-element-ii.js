/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const target = Math.floor(nums.length / 3);
    
    let res = [], c1 = 0, c2 = 0, el1 = Number.NEGATIVE_INFINITY, el2 = Number.NEGATIVE_INFINITY;

    nums.forEach(num => {
        if (c1 === 0 && num !== el2) {
            c1 = 1;
            el1 = num;
        } else if (c2 === 0 && num !== el1) {
            c2 = 1;
            el2 = num;
        } else if (num === el1) {
            c1++;
        } else if (num === el2) {
            c2++;
        } else {
            c1--;
            c2--;
        }
    });

    c1 = 0;
    c2 = 0;
    nums.forEach(num => {
        if (num === el1) c1++;
        if (num === el2) c2++;
    });

    if (c1 > target) res.push(el1);
    if (c2 > target) res.push(el2);

    return res;
};