/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 1)
    {
        return [[nums[0]]]
    }
    
    let res = [];

    for(let i = 0; i < nums.length; i++)
    {
        let n = nums.shift()
        
        const perms = permute(nums)
        
        perms.forEach(perm => {
            perm.push(n)
        })
        
        res.push(...perms)
        
        nums.push(n)
    }
    
    return res;    
};