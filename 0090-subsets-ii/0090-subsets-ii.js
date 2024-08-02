/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    
    function ss(arr, idx) {
        if(idx === nums.length)
        {
            const tempRes = JSON.stringify(arr.sort((a,b) => a-b))
            const found = res.some(item => JSON.stringify(item.sort((a,b) => a-b)) === tempRes)
            if(!found)
                res.push(arr)
            return;
        }
        
        ss([...arr, nums[idx]], idx + 1);
        ss(arr, idx + 1);
    }
    
    ss([], 0)
    
    return res;
};