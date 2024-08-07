/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    function perm(arr, mapping, idx) {
        if(arr.length === nums.length)
        {
            res.push(arr)
            return;
        }
        
        for(let i = 0; i < nums.length; i++) 
        {
            if(mapping[i] === 0)
            {
                mapping[i] = 1;
                perm([...arr, nums[i]], mapping, i + 1);
                mapping[i] = 0; 
            }
        }
    }
    
    perm([], new Array(nums.length).fill(0), 0)
    
    return res;
};