/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let robData = {}
    function robHouse(idx) {
        if(idx === 0)
        {
            return nums[0];
        }
        
        if(idx < 0)
        {
            return 0;
        }
        
        if(Object.hasOwn(robData, idx))
        {
            return robData[idx];
        }
        
        let robcurrhouse = nums[idx] + robHouse(idx - 2);
        let notrobhouse = robHouse(idx - 1);
        
        return robData[idx] = Math.max(notrobhouse, robcurrhouse);
    }
    
    return robHouse(nums.length - 1);
};