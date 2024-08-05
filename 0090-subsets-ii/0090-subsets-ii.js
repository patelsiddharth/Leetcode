/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a,b) => a-b)
    function ss(arr, idx) {
        res.push([...arr]);
        
        for(let i = idx; i < nums.length; i++)
        {
            if(i > idx && nums[i] === nums[i-1])
            {
                continue;
            }
            
            ss([...arr, nums[i]], i + 1);
        }
    }
    
    ss([], 0);
    return res;
};