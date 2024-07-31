/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    function per(arrtemp, arrMap) {
        if(arrtemp.length === arrMap.length)
        {
            res.push([...arrtemp])
            return;
        }
        
        for(let i = 0; i < arrMap.length; i++)
        {
            if(arrMap[i] === 0)
            {
                arrMap[i] = 1;
                arrtemp.push(nums[i]);
                
                per(arrtemp, arrMap);
                
                arrMap[i] = 0;
                arrtemp.pop();
            }
        }
    }
    
    per([], new Array(nums.length).fill(0));
    
    return res;
};