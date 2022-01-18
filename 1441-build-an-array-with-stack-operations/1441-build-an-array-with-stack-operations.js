/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res = [];
    for(let i = 1; i <= target[target.length-1]; i++)
    {
        res.push("Push");
        if(!target.includes(i))
        {
            res.push("Pop");
        }
    }
    return res;
};