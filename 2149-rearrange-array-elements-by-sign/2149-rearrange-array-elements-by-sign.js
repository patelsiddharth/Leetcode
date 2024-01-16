/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let neg = [], pos = [], res = [], idx = 0;
    neg = nums.filter(num => num < 0);
    pos = nums.filter(num => num > 0);
    
    for(let i = 0; i < nums.length; i++)
    {
        if(i % 2 === 0)
        {
            res.push(pos[idx]);
        }
        else
        {
            res.push(neg[idx]);
            idx++;
        }
    }
    return res;
};