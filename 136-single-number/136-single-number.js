/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = [];
    nums.forEach((num, index) => {
        if(!res.includes(num))
        {
            res.push(num)
        }
        else
        {
            const idx = res.findIndex(i => i === num)
            if(idx > -1)
            {
                res.splice(idx,1);
            }
        }
    });
    return res[0];
};