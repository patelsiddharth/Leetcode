/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    function ss(arr, idx) {
        if(idx === nums.length)
        {
            res.push([...arr]);
            return; 
        }
        
        arr.push(nums[idx]);
        ss(arr, idx + 1);
        
        arr.pop()
        ss(arr, idx + 1);
    }
    
    ss([], 0);
    
    return res;
};