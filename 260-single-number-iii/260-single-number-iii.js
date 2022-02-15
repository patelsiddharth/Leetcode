/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let res = {};
    nums.forEach(num => {
        res[num] ? res[num]++ : res[num] = 1;
    })
    return Object.entries(res).reduce((acc,curr) => {
        curr[1] === 1 && acc.push(curr[0])
        return acc
    }, []);
};